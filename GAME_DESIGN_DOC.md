# 🏎️ NEON COURIER — Game Design Document
**Genre:** Arcade Racing / Story Driven
**Platform:** Web (HTML5) / Mobile
**Inspiration:** DataWing-style minimalist racing
**Theme:** Fleet Communications / Cyberpunk Aesthetics

---

## 🎮 CORE CONCEPT

**You are a NET RUNNER** — a digital courier delivering encrypted messages between fleet ships through the NEON WIRE, a vast network of light-speed data tunnels.

### Story Hook
> *"The old networks are dying. The Fleet depends on runners like you to keep the light flowing. Navigate the tunnels. Deliver the packets. Don't get corrupted."*

---

## 🎨 VISUAL STYLE

### Aesthetic: Neon Minimalism

**Color Palette:**
- Primary: Electric Cyan (#00FFFF) — Player ship
- Secondary: Hot Magenta (#FF00FF) — Boost/Energy  
- Accent: Solar Gold (#FFD700) — Objectives
- Background: Deep Void (#0A0A1A)
- Grid: Faded Teal (#008899, 30% opacity)
- Danger: Red (#FF0040)

**Style:** Vector graphics, glowing neon edges, minimalist ship design (triangular), tunnel perspective (3D depth), particle effects

### Ship Design: THE COURIER
```
        /\
       /  \     <- Glowing cockpit
      /    \
     /______\   <- Thruster ports
    /        \
   /   ####   \  <- Cargo bay
  /____________\
```

---

## 🎮 GAMEPLAY MECHANICS

### Controls
| Platform | Input | Action |
|----------|-------|--------|
| Desktop | ← → Keys | Steer |
| Desktop | ↑ Key | Boost |
| Desktop | Space | Brake |
| Mobile | Touch Left/Right | Steer |
| Mobile | Hold Both | Boost |

**Philosophy:** *"One touch to steer. Feel the flow."*

---

### Core Loop

```
START (Fleet Hub)
    ↓
ENTER TUNNEL
    ↓
NAVIGATE (avoid, collect)
    ↓
REACH CHECKPOINTS
    ↓
DELIVER
    ↓
NEXT RUN
```

---

### Gameplay Elements

#### THE TUNNEL
- Infinite zoom perspective
- Moving grid = speed sensation
- Segments with different themes

**Tunnel Types:**
- **Data Highway:** Standard, clear
- **Firewall Zone:** Hazard heavy, security drones
- **Quantum Flux:** Warp sections, reality bends

#### OBSTACLES
| Object | Behavior |
|--------|----------|
| Firewall Nodes | Stationary blocks |
| Security Drones | Move side-to-side |
| Data Storm | Screen-wide pulses |
| Glitch Fields | Distort controls |
| Bandwidth Limit | Speed caps |

#### COLLECTIBLES
| Item | Effect |
|------|--------|
| Data Packet | +100 points |
| Encrypted Cache | +500 points, +shield |
| Quantum Fragment | +boost energy |
| Priority Message | +1000 points, time bonus |
| Fleet Beacon | Checkpoint save |

#### BOOST SYSTEM
- **Normal:** 300 units/sec
- **Boost:** 600 units/sec
- **Energy:** Regenerates slowly
- **Risk:** Higher speed = harder to dodge

---

## 📖 STORY MODE

### Characters

**MOTHER** — The Fleet AI (voice only)
*"Runner, I have a delivery. Priority Alpha."*

**GHOST** — Mysterious rival runner
*"You're fast... but speed isn't everything."*

**CIPHER** — Black market contact
*"Some packets shouldn't be delivered. Interested?"*

**REMNANT** — Corrupted former runner
*"The wire... it changes you..."*

### Campaign: 12 Missions

1. **First Light** — Tutorial
2. **Packet Dash** — Time trial
3. **The Firewall** — Drones active
4. **Ghost Signal** — Chase sequence
5. **Dead Drop** — Stealth section
6. **Cascade Failure** — Survival
7. **Remnant** — Boss fight
8. **The Courier** — Long haul
9. **Cipher's Deal** — Moral choice
10. **Mother's Secret** — Plot reveal
11. **The Last Message** — No checkpoints
12. **Beyond The Wire** — True ending

---

## 🏆 GAME MODES

- **Story Mode:** 12 missions with narrative
- **Arcade Mode:** Endless runner, score chase
- **Time Trial:** Perfect each track
- **Daily Run:** Seed-generated course
- **Fleet Challenge:** Ghost runs vs friends

---

## 🔧 SHIP CUSTOMIZATION

### Visual Upgrades
- **Hulls:** Standard, Stealth, Gold, Remnant, Quantum
- **Trails:** Neon, Particles, Glitch, Pulse
- **Boost Effects:** Sonic boom, Warp, EMP

### Performance Upgrades
| Upgrade | Effect | Cost |
|---------|--------|------|
| Enhanced Boost | Faster regen | 1000 packets |
| Shield Unit | One-hit protection | 2500 packets |
| Quantum Drive | Warp speed | 5000 packets |
| Data Scanner | See hidden | 1500 packets |

---

## 🎵 AUDIO

### Music: Synthwave
1. "Neon Highway" — Fast, driving
2. "Ghost In The Wire" — Mysterious
3. "Firewall Breach" — Intense
4. "Mother's Lullaby" — Melancholic
5. "Beyond" — Triumphant ending

### Sound FX
- Boost: Sonic whoosh
- Collect: Musical ping
- Crash: Glitch static
- Checkpoint: Digital chime

---

## 📱 TECHNICAL

### Platform
- **Primary:** HTML5 Canvas (web)
- **Secondary:** Mobile wrapper
- **Tertiary:** Desktop

### Tech Stack
- **Engine:** Phaser 3
- **Language:** JavaScript
- **Audio:** Web Audio API
- **Storage:** LocalStorage

### Performance
- **60 FPS** (desktop)
- **30+ FPS** (mobile)
- **< 10MB** initial load
- **Offline** (PWA)

---

## 🚀 DEVELOPMENT TIMELINE

### Week 1: Core
- [ ] Rendering pipeline
- [ ] Ship controls
- [ ] Tunnel scrolling
- [ ] Collision detection

### Week 2: Content
- [ ] Obstacles & collectibles
- [ ] 3 tunnel themes
- [ ] Audio system
- [ ] HUD design

### Week 3: Features
- [ ] Story framework
- [ ] Upgrade system
- [ ] 6 missions
- [ ] Ship customization

### Week 4: Polish
- [ ] Remaining missions
- [ ] Leaderboards
- [ ] Mobile optimization
- [ ] Release

---

**Title:** NEON COURIER
**Codename:** PACKET RUNNER
**Tagline:** *"The light must flow."*

---

*Connected to Fleet Portal Network lore*