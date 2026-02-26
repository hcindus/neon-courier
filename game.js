// NEON COURIER - Main Game Engine
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const game = {
    running: false,
    score: 0,
    distance: 0,
    speed: 5,
    boost: 100,
    boostActive: false,
    
    ship: { x: 400, y: 500, width: 30, height: 40, vx: 0, angle: 0 },
    keys: { left: false, right: false, boost: false },
    obstacles: [],
    collectibles: [],
    particles: [],
    
    config: {
        baseSpeed: 5,
        boostSpeed: 10,
        steerSpeed: 8,
        friction: 0.9
    }
};

game.bindControls = function() {
    window.addEventListener('keydown', (e) => {
        if(e.key === 'ArrowLeft') this.keys.left = true;
        if(e.key === 'ArrowRight') this.keys.right = true;
        if(e.key === 'ArrowUp' || e.key === ' ') this.keys.boost = true;
    });
    window.addEventListener('keyup', (e) => {
        if(e.key === 'ArrowLeft') this.keys.left = false;
        if(e.key === 'ArrowRight') this.keys.right = false;
        if(e.key === 'ArrowUp' || e.key === ' ') this.keys.boost = false;
    });
};

game.start = function() {
    document.getElementById('mainMenu').classList.add('hidden');
    this.running = true;
    this.reset();
};

game.reset = function() {
    this.score = 0;
    this.distance = 0;
    this.boost = 100;
    this.ship.x = 400;
    this.ship.vx = 0;
    this.obstacles = [];
    this.collectibles = [];
};

game.loop = function() {
    if(this.running) this.update();
    this.render();
    requestAnimationFrame(() => this.loop());
};

game.update = function() {
    // Boost
    if(this.keys.boost && this.boost > 0) {
        this.boostActive = true;
        this.speed = this.config.boostSpeed;
        this.boost -= 0.5;
    } else {
        this.boostActive = false;
        this.speed = this.config.baseSpeed;
        if(this.boost < 100) this.boost += 0.1;
    }
    
    // Steering
    if(this.keys.left) this.ship.vx -= this.config.steerSpeed * 0.1;
    if(this.keys.right) this.ship.vx += this.config.steerSpeed * 0.1;
    this.ship.vx *= this.config.friction;
    
    this.ship.x += this.ship.vx;
    if(this.ship.x < 50) { this.ship.x = 50; this.ship.vx = 0; }
    if(this.ship.x > 750) { this.ship.x = 750; this.ship.vx = 0; }
    
    this.distance += this.speed * 0.1;
    
    // Spawn objects
    if(Math.random() < 0.02) {
        this.obstacles.push({
            x: 50 + Math.random() * 700,
            y: -50,
            width: 50, height: 50,
            color: '#ff0040'
        });
    }
    if(Math.random() < 0.03) {
        const types = ['#00ffff', '#ffd700', '#ff00ff'];
        this.collectibles.push({
            x: 50 + Math.random() * 700,
            y: -50,
            width: 25, height: 25,
            color: types[Math.floor(Math.random() * types.length)],
            rotation: 0
        });
    }
    
    // Update objects
    for(let i = this.obstacles.length - 1; i >= 0; i--) {
        const obs = this.obstacles[i];
        obs.y += this.speed;
        if(this.checkCollision(this.ship, obs)) {
            this.speed = 2;
            this.score = Math.max(0, this.score - 50);
            this.obstacles.splice(i, 1);
        } else if(obs.y > 650) {
            this.obstacles.splice(i, 1);
        }
    }
    
    for(let i = this.collectibles.length - 1; i >= 0; i--) {
        const col = this.collectibles[i];
        col.y += this.speed;
        col.rotation += 0.05;
        if(this.checkCollision(this.ship, col)) {
            if(col.color === '#00ffff') this.score += 100;
            else if(col.color === '#ffd700') { this.score += 500; this.boost = Math.min(100, this.boost + 20); }
            else this.score += 50;
            this.collectibles.splice(i, 1);
        } else if(col.y > 650) {
            this.collectibles.splice(i, 1);
        }
    }
    
    document.getElementById('score').textContent = this.score;
    document.getElementById('distance').textContent = Math.floor(this.distance);
    document.getElementById('boostFill').style.width = this.boost + '%';
};

game.checkCollision = function(a, b) {
    return a.x < b.x + b.width && a.x + a.width > b.x &&
           a.y < b.y + b.height && a.y + a.height > b.y;
};

game.render = function() {
    ctx.fillStyle = '#0a0a1a';
    ctx.fillRect(0, 0, 800, 600);
    
    // Grid
    ctx.strokeStyle = 'rgba(0, 136, 153, 0.3)';
    ctx.lineWidth = 1;
    const offset = (Date.now() / 10) % 100;
    for(let y = -100 + offset; y < 650; y += 100) {
        ctx.beginPath(); ctx.moveTo(50, y); ctx.lineTo(750, y); ctx.stroke();
    }
    for(let x = 50; x <= 750; x += 50) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, 600); ctx.stroke();
    }
    
    // Tunnel edges
    ctx.strokeStyle = '#00ffff';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#00ffff';
    ctx.beginPath(); ctx.moveTo(50, 0); ctx.lineTo(50, 600); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(750, 0); ctx.lineTo(750, 600); ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Obstacles
    for(const obs of this.obstacles) {
        ctx.fillStyle = obs.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = obs.color;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        ctx.shadowBlur = 0;
    }
    
    // Collectibles
    for(const col of this.collectibles) {
        ctx.save();
        ctx.translate(col.x + 12, col.y + 12);
        ctx.rotate(col.rotation);
        ctx.fillStyle = col.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = col.color;
        ctx.beginPath();
        ctx.moveTo(0, -12); ctx.lineTo(12, 0); ctx.lineTo(0, 12); ctx.lineTo(-12, 0);
        ctx.closePath(); ctx.fill();
        ctx.restore();
        ctx.shadowBlur = 0;
    }
    
    // Ship
    const s = this.ship;
    ctx.fillStyle = '#00ffff';
    ctx.shadowBlur = 25;
    ctx.shadowColor = '#00ffff';
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(this.keys.left ? -0.2 : this.keys.right ? 0.2 : 0);
    ctx.beginPath();
    ctx.moveTo(0, -20); ctx.lineTo(-15, 20); ctx.lineTo(0, 10); ctx.lineTo(15, 20);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(0, -5, 5, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
    ctx.shadowBlur = 0;
};

game.showHelp = function() {
    alert('HOW TO PLAY:\n\nDesktop:\n- Arrows to steer\n- Up/Space for boost\n\nGoal: Collect packets (+100-500), avoid red obstacles (-50)');
};

game.showStory = function() {
    alert('THE WIRE\n\nYou are a NET RUNNER delivering messages through the NEON WIRE.\n\n"The light must flow."');
};

game.bindControls();
game.loop();
