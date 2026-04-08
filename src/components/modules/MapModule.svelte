<script>
  import Led from '../ui/Led.svelte';
  import Toggle from '../ui/Toggle.svelte';

  let lockPos = $state(false);
</script>

<div class="map-module">
  <!-- Title -->
  <div class="map-title">KARTA / KARTA</div>

  <div class="map-body">
    <!-- LEFT CONTROLS -->
    <div class="map-left">
      <!-- Coordinate LCD -->
      <div class="coord-lcd">
        <div class="coord-row">
          <span class="coord-value">20</span>
          <span class="coord-value coord-neg">-215</span>
        </div>
      </div>

      <!-- Rotary Knobs -->
      <div class="knob-row">
        <div class="knob-group">
          <div class="knob">
            <div class="knob-cap">
              <div class="knob-indicator"></div>
            </div>
          </div>
          <div class="knob-label">MAP DENSITY<br><span class="knob-label-cyr">ПЛОТНОСТЬ</span></div>
        </div>
        <div class="knob-group">
          <div class="knob">
            <div class="knob-cap">
              <div class="knob-indicator"></div>
            </div>
          </div>
          <div class="knob-label">ZOOM<br><span class="knob-label-cyr">ЗУМ</span></div>
        </div>
      </div>

      <!-- System text -->
      <div class="sys-text">BASIC V2.0 / SYS 64738</div>

      <!-- Emergency buttons -->
      <div class="emergency-row">
        <button class="emergency-btn">EMERGENCY</button>
        <button class="emergency-btn">EMERGENCY</button>
      </div>

      <!-- Toggle switches -->
      <div class="toggle-bank">
        <div class="mini-toggle">
          <div class="mini-toggle-body">
            <div class="mini-toggle-lever"></div>
          </div>
        </div>
        <div class="mini-toggle">
          <div class="mini-toggle-body">
            <div class="mini-toggle-lever"></div>
          </div>
        </div>
        <div class="mini-toggle">
          <div class="mini-toggle-body">
            <div class="mini-toggle-lever"></div>
          </div>
        </div>
        <div class="mini-toggle">
          <div class="mini-toggle-body">
            <div class="mini-toggle-lever"></div>
          </div>
        </div>
        <div class="mini-toggle">
          <div class="mini-toggle-body">
            <div class="mini-toggle-lever"></div>
          </div>
        </div>
      </div>

      <!-- VS indicator -->
      <div class="vs-indicator">
        <div class="vs-lcd">VS</div>
      </div>

      <!-- Bottom left info -->
      <div class="bottom-left-info">
        <div class="emblem">
          <div class="emblem-icon">&#9776;</div>
        </div>
        <div class="bottom-text">
          BASIC V2.0<br>
          SYS 64738<br>
          POKE 53280,3
        </div>
      </div>
    </div>

    <!-- CENTER MAP SCREEN -->
    <div class="map-center">
      <div class="crt-frame">
        <div class="crt-screen">
          <div class="crt-header">PERTH TACTICAL SURVEY - MAP SET ALPHA</div>
          <div class="crt-map">
            <!-- Stylized map background -->
            <div class="map-terrain">
              <!-- Water bodies -->
              <div class="water water-ocean"></div>
              <div class="water water-river"></div>
              <div class="water water-sound"></div>

              <!-- Green terrain areas -->
              <div class="terrain terrain-north"></div>
              <div class="terrain terrain-east"></div>
              <div class="terrain terrain-south"></div>

              <!-- Roads -->
              <div class="road road-1"></div>
              <div class="road road-2"></div>
              <div class="road road-3"></div>
              <div class="road road-4"></div>

              <!-- Location markers -->
              <div class="map-marker" style="top: 18%; left: 30%;">
                <div class="marker-dot"></div>
                <div class="marker-label">Swanhaven<br>Base</div>
              </div>
              <div class="map-marker" style="top: 10%; left: 72%;">
                <div class="marker-dot"></div>
                <div class="marker-label">Emergency<br>Reroute</div>
              </div>
              <div class="map-marker" style="top: 38%; left: 20%;">
                <div class="marker-dot"></div>
                <div class="marker-label">Industrial<br>Zone 4</div>
              </div>
              <div class="map-marker" style="top: 48%; left: 14%;">
                <div class="marker-dot"></div>
                <div class="marker-label label-left">NBD<br>Fremantle</div>
              </div>
              <div class="map-marker" style="top: 35%; left: 52%;">
                <div class="marker-dot"></div>
                <div class="marker-label">Port<br>Facilities</div>
              </div>
              <div class="map-marker" style="top: 60%; left: 42%;">
                <div class="marker-dot"></div>
                <div class="marker-label label-left">Emergency<br>Reroute</div>
              </div>
              <div class="map-marker" style="top: 55%; left: 62%;">
                <div class="marker-dot"></div>
                <div class="marker-label">Port<br>Facilities</div>
              </div>
              <div class="map-marker" style="top: 68%; left: 25%;">
                <div class="marker-dot"></div>
                <div class="marker-label label-left">Cockburn<br>Sound</div>
              </div>
              <div class="map-marker" style="top: 78%; left: 32%;">
                <div class="marker-dot"></div>
                <div class="marker-label">Garden Island<br>Outpost</div>
              </div>
              <div class="map-marker" style="top: 78%; left: 55%;">
                <div class="marker-dot"></div>
                <div class="marker-label">University<br>Base Alpha</div>
              </div>
              <div class="map-marker" style="top: 72%; left: 78%;">
                <div class="marker-dot"></div>
                <div class="marker-label">Canning<br>River</div>
              </div>

              <!-- 108 MB label -->
              <div class="map-data-label" style="top: 38%; left: 68%;">108 MB</div>
            </div>
          </div>
          <!-- CRT scanline overlay -->
          <div class="crt-scanlines"></div>
          <div class="crt-glow"></div>
        </div>
      </div>
    </div>

    <!-- RIGHT CONTROLS -->
    <div class="map-right">
      <div class="right-control">
        <div class="right-label">DENSITY</div>
        <div class="right-row">
          <Led color="green" />
          <span class="right-label-text">BODY<br><span class="right-cyr">ТАЧКЕ</span></span>
        </div>
      </div>

      <div class="right-control">
        <div class="right-row">
          <Led color="amber" />
          <span class="right-label-text">LOCK POS</span>
        </div>
      </div>

      <div class="right-control">
        <div class="right-mini-lcd">
          <span class="right-label-text">VELKOST<br><span class="right-cyr">РУТЕ</span></span>
        </div>
      </div>

      <div class="right-control">
        <div class="right-mini-lcd">
          <span class="right-label-text">MGRS 50H</span>
        </div>
      </div>

      <div class="right-control">
        <div class="right-label-text">TRASY<br><span class="right-cyr">РУТЕ</span></div>
      </div>

      <div class="right-control">
        <div class="right-label-text">REPEATED<br>(BLANK)</div>
      </div>

      <!-- Large green LED -->
      <div class="right-control offline-indicator">
        <div class="big-led-wrap">
          <div class="big-led"></div>
        </div>
        <div class="offline-text">
          OFFLINE TILES READY<br>
          <span class="right-cyr">OFFLINE PLOCICE SPREMNE</span>
        </div>
      </div>

      <!-- Radiation symbol and bottom labels -->
      <div class="right-control right-bottom">
        <div class="radiation-symbol">&#9762;</div>
        <div class="right-tiny-text">Champ mtr</div>
        <div class="right-tiny-label">OCHRANEC</div>
        <div class="right-tiny-label">Master power switch</div>
      </div>
    </div>
  </div>
</div>

<style>
  /* === MODULE WRAPPER === */
  .map-module {
    background: #c4a87a;
    background-image:
      radial-gradient(ellipse at 20% 10%, rgba(210, 190, 150, 0.6) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 90%, rgba(150, 130, 90, 0.4) 0%, transparent 50%),
      linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 30%, rgba(0,0,0,0.12) 100%),
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.015) 2px, rgba(0,0,0,0.015) 4px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.01) 2px, rgba(0,0,0,0.01) 4px);
    border: 3px solid var(--panel-700);
    border-radius: var(--radius);
    padding: 16px;
    box-shadow:
      inset 3px 3px 0 rgba(255,255,255,0.25),
      inset -3px -3px 0 rgba(0,0,0,0.3),
      0 4px 11px rgba(0,0,0,0.35);
    position: relative;
    overflow: hidden;
  }

  /* Worn texture overlay */
  .map-module::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 15% 85%, rgba(0,0,0,0.08) 0%, transparent 30%),
      radial-gradient(circle at 85% 15%, rgba(255,255,255,0.06) 0%, transparent 25%),
      radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.05) 100%);
    pointer-events: none;
    z-index: 1;
  }

  /* Corner screws */
  .map-module::before {
    content: '';
    position: absolute;
    top: 10px; left: 10px;
    width: 10px; height: 10px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #d4c8a8, #8a7e60 60%, #5a5040);
    box-shadow:
      calc(100% - 20px) 0 0 0 #8a7e60,
      0 calc(100% - 20px) 0 0 #8a7e60,
      calc(100% - 20px) calc(100% - 20px) 0 0 #8a7e60,
      inset 0 0 2px rgba(0,0,0,0.5);
    border: 1px solid rgba(0,0,0,0.3);
    z-index: 5;
  }

  /* === TITLE === */
  .map-title {
    font-family: var(--font-mono);
    font-size: clamp(20px, 2.5vw, 30px);
    font-weight: 900;
    color: #2a2518;
    text-align: center;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin-bottom: 12px;
    text-shadow: 1px 1px 0 rgba(255,255,255,0.2);
    position: relative;
    z-index: 2;
  }

  /* === THREE COLUMN BODY === */
  .map-body {
    display: grid;
    grid-template-columns: 180px 1fr 140px;
    gap: 12px;
    position: relative;
    z-index: 2;
  }

  /* === LEFT CONTROLS === */
  .map-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* Coordinate LCD */
  .coord-lcd {
    background: #0a120a;
    border: 3px inset #5a5040;
    border-radius: 2px;
    padding: 8px 10px;
  }
  .coord-row {
    display: flex;
    justify-content: center;
    gap: 12px;
  }
  .coord-value {
    font-family: var(--font-lcd7);
    font-size: clamp(22px, 2.5vw, 32px);
    color: #44dd44;
    text-shadow: 0 0 10px #44dd44, 0 0 20px rgba(68,221,68,0.3);
    letter-spacing: 2px;
  }
  .coord-neg {
    color: #44dd44;
  }

  /* Knob row */
  .knob-row {
    display: flex;
    justify-content: space-around;
    gap: 8px;
  }
  .knob-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .knob {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #e8e0d0, #a09080 40%, #706050 70%, #504030 100%);
    box-shadow:
      0 3px 8px rgba(0,0,0,0.5),
      0 1px 2px rgba(0,0,0,0.3),
      inset 0 1px 3px rgba(255,255,255,0.3),
      0 0 0 3px #504030;
    position: relative;
  }
  .knob-cap {
    position: absolute;
    inset: 6px;
    border-radius: 50%;
    background: radial-gradient(circle at 40% 35%, #d8d0c0, #b0a090 50%, #807060 100%);
    box-shadow:
      inset 0 2px 4px rgba(255,255,255,0.3),
      inset 0 -2px 4px rgba(0,0,0,0.2);
  }
  .knob-indicator {
    position: absolute;
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 10px;
    background: #2a2518;
    border-radius: 1px;
  }
  .knob-label {
    font-family: var(--font-tech);
    font-size: 8px;
    color: #3a3020;
    text-align: center;
    letter-spacing: 0.8px;
    line-height: 1.3;
    text-transform: uppercase;
  }
  .knob-label-cyr {
    font-size: 7px;
    color: #5a5040;
    letter-spacing: 0.5px;
  }

  /* System text */
  .sys-text {
    font-family: var(--font-tech);
    font-size: 7px;
    color: #5a5040;
    text-align: center;
    letter-spacing: 1px;
  }

  /* Emergency buttons */
  .emergency-row {
    display: flex;
    gap: 6px;
    justify-content: center;
  }
  .emergency-btn {
    background: linear-gradient(180deg, #e83030 0%, #c41010 40%, #a00000 100%);
    color: #fff;
    font-family: var(--font-mono);
    font-size: 7px;
    font-weight: 900;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    border: 2px solid #600;
    border-radius: 3px;
    padding: 6px 8px;
    cursor: pointer;
    box-shadow:
      0 3px 0 #600,
      0 4px 8px rgba(0,0,0,0.4),
      inset 0 1px 1px rgba(255,255,255,0.3);
    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    flex: 1;
    min-height: 28px;
  }
  .emergency-btn:active {
    transform: translateY(2px);
    box-shadow: 0 1px 0 #600, inset 0 2px 4px rgba(0,0,0,0.4);
  }

  /* Toggle bank */
  .toggle-bank {
    display: flex;
    gap: 6px;
    justify-content: center;
  }
  .mini-toggle {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .mini-toggle-body {
    width: 18px;
    height: 30px;
    background: linear-gradient(180deg, #504030, #2a2010);
    border-radius: 3px;
    border: 1px solid #1a1008;
    position: relative;
    box-shadow: inset 0 0 4px rgba(0,0,0,0.6);
  }
  .mini-toggle-lever {
    position: absolute;
    width: 12px;
    height: 14px;
    left: 50%;
    top: 2px;
    transform: translateX(-50%);
    background: linear-gradient(180deg, #e0d8c8, #a09888, #807060);
    border-radius: 2px;
    border: 1px solid rgba(0,0,0,0.3);
    box-shadow: 0 2px 0 rgba(0,0,0,0.3);
  }

  /* VS indicator */
  .vs-indicator {
    display: flex;
    justify-content: center;
  }
  .vs-lcd {
    background: #0a120a;
    border: 2px inset #5a5040;
    border-radius: 2px;
    padding: 4px 12px;
    font-family: var(--font-lcd14);
    font-size: 14px;
    color: var(--lcd-text);
    text-shadow: 0 0 6px var(--lcd-text);
    text-align: center;
  }

  /* Bottom left */
  .bottom-left-info {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: auto;
  }
  .emblem {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #2a2518;
    border: 2px solid #5a5040;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .emblem-icon {
    color: #a09070;
    font-size: 16px;
  }
  .bottom-text {
    font-family: var(--font-tech);
    font-size: 6px;
    color: #5a5040;
    letter-spacing: 0.8px;
    line-height: 1.5;
  }

  /* === CENTER MAP === */
  .map-center {
    display: flex;
    align-items: stretch;
  }
  .crt-frame {
    flex: 1;
    background: linear-gradient(135deg, #706858, #504838 30%, #3a3228 60%, #504838 100%);
    border-radius: 4px;
    padding: 8px;
    box-shadow:
      inset 2px 2px 4px rgba(255,255,255,0.1),
      inset -2px -2px 4px rgba(0,0,0,0.4),
      0 4px 12px rgba(0,0,0,0.4);
    border: 2px solid #2a2418;
  }
  .crt-screen {
    background: #0d1a10;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    height: 100%;
    min-height: 350px;
    border: 3px solid #1a1810;
    box-shadow:
      inset 0 0 30px rgba(0,0,0,0.5),
      inset 0 0 60px rgba(0,20,0,0.3);
  }

  /* CRT header */
  .crt-header {
    background: rgba(0,0,0,0.5);
    padding: 6px 12px;
    font-family: var(--font-crt);
    font-size: clamp(11px, 1.2vw, 16px);
    color: #c8c0a0;
    letter-spacing: 2px;
    text-align: center;
    text-shadow: 0 0 4px rgba(200,192,160,0.4);
    border-bottom: 1px solid rgba(200,192,160,0.15);
  }

  /* CRT map area */
  .crt-map {
    position: relative;
    width: 100%;
    height: calc(100% - 34px);
    overflow: hidden;
  }
  .map-terrain {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, #1a3a20 0%, #1a3a20 25%, #0d2a18 25%, #1a3520 50%, #1a4025 50%, #183820 75%, #1a3520 100%);
  }

  /* Water bodies */
  .water {
    position: absolute;
    background: #1a3050;
    opacity: 0.8;
  }
  .water-ocean {
    left: 0;
    top: 0;
    width: 15%;
    height: 100%;
    background: linear-gradient(90deg, #1a3060, #1a3050 70%, transparent);
  }
  .water-river {
    right: 5%;
    top: 50%;
    width: 25%;
    height: 3px;
    background: #2a5080;
    transform: rotate(-20deg);
    box-shadow: 0 0 6px rgba(42,80,128,0.4);
  }
  .water-sound {
    left: 5%;
    bottom: 10%;
    width: 20%;
    height: 18%;
    border-radius: 30% 50% 40% 20%;
    background: radial-gradient(ellipse, #1a4060, #1a3050);
  }

  /* Terrain patches */
  .terrain {
    position: absolute;
    border-radius: 20%;
  }
  .terrain-north {
    top: 5%;
    left: 20%;
    width: 50%;
    height: 30%;
    background: radial-gradient(ellipse, #2a5a30, #1a4020);
    opacity: 0.6;
  }
  .terrain-east {
    top: 20%;
    right: 5%;
    width: 35%;
    height: 40%;
    background: radial-gradient(ellipse, #2a5a30, #1a4020);
    opacity: 0.5;
  }
  .terrain-south {
    bottom: 5%;
    left: 30%;
    width: 50%;
    height: 25%;
    background: radial-gradient(ellipse, #2a5a30, #1a4020);
    opacity: 0.5;
  }

  /* Roads */
  .road {
    position: absolute;
    background: #a08030;
    opacity: 0.6;
    box-shadow: 0 0 4px rgba(160,128,48,0.3);
  }
  .road-1 {
    top: 15%;
    left: 30%;
    width: 50%;
    height: 2px;
    transform: rotate(10deg);
  }
  .road-2 {
    top: 10%;
    left: 45%;
    width: 2px;
    height: 70%;
    transform: rotate(5deg);
  }
  .road-3 {
    top: 40%;
    left: 20%;
    width: 60%;
    height: 2px;
    transform: rotate(-5deg);
  }
  .road-4 {
    top: 25%;
    left: 35%;
    width: 2px;
    height: 55%;
    transform: rotate(-10deg);
  }

  /* Map markers */
  .map-marker {
    position: absolute;
    z-index: 3;
    display: flex;
    align-items: flex-start;
    gap: 4px;
  }
  .marker-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #ff6644;
    box-shadow: 0 0 6px #ff6644, 0 0 12px rgba(255,102,68,0.4);
    flex-shrink: 0;
    margin-top: 2px;
  }
  .marker-label {
    font-family: var(--font-crt);
    font-size: clamp(8px, 0.9vw, 11px);
    color: #d0c8a0;
    text-shadow: 0 0 4px rgba(0,0,0,0.8), 0 1px 2px rgba(0,0,0,0.9);
    line-height: 1.2;
    white-space: nowrap;
    pointer-events: none;
  }
  .label-left {
    order: -1;
    text-align: right;
  }

  .map-data-label {
    position: absolute;
    font-family: var(--font-crt);
    font-size: 14px;
    color: #d0c8a0;
    background: rgba(0,0,0,0.5);
    padding: 2px 6px;
    border: 1px solid rgba(200,192,160,0.3);
    text-shadow: 0 0 4px rgba(200,192,160,0.4);
    z-index: 3;
  }

  /* CRT effects */
  .crt-scanlines {
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0,
      transparent 2px,
      rgba(0,0,0,0.15) 2px,
      rgba(0,0,0,0.15) 4px
    );
    pointer-events: none;
    z-index: 4;
  }
  .crt-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.4) 100%);
    pointer-events: none;
    z-index: 4;
  }

  /* === RIGHT CONTROLS === */
  .map-right {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
    padding-top: 4px;
  }
  .right-control {
    width: 100%;
  }
  .right-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .right-label {
    font-family: var(--font-tech);
    font-size: 9px;
    color: #3a3020;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .right-label-text {
    font-family: var(--font-tech);
    font-size: 9px;
    color: #3a3020;
    letter-spacing: 1px;
    text-transform: uppercase;
    line-height: 1.3;
  }
  .right-cyr {
    font-family: var(--font-mono);
    font-size: 8px;
    color: #6a6050;
    letter-spacing: 0.5px;
  }
  .right-mini-lcd {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Offline indicator with big LED */
  .offline-indicator {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .big-led-wrap {
    flex-shrink: 0;
  }
  .big-led {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #aaffaa, #33cc33 40%, #22aa22 70%, #118811);
    box-shadow:
      0 0 15px #33cc33,
      0 0 30px rgba(51,204,51,0.5),
      0 0 60px rgba(51,204,51,0.25),
      inset 0 0 8px rgba(255,255,255,0.3),
      0 0 0 3px #2a2518,
      0 0 0 5px #5a5040;
    animation: ledGlow 2s ease-in-out infinite;
  }
  @keyframes ledGlow {
    0%, 100% { filter: brightness(1); box-shadow: 0 0 15px #33cc33, 0 0 30px rgba(51,204,51,0.5), 0 0 60px rgba(51,204,51,0.25), inset 0 0 8px rgba(255,255,255,0.3), 0 0 0 3px #2a2518, 0 0 0 5px #5a5040; }
    50% { filter: brightness(1.15); box-shadow: 0 0 20px #33cc33, 0 0 40px rgba(51,204,51,0.6), 0 0 80px rgba(51,204,51,0.3), inset 0 0 8px rgba(255,255,255,0.3), 0 0 0 3px #2a2518, 0 0 0 5px #5a5040; }
  }
  .offline-text {
    font-family: var(--font-tech);
    font-size: 8px;
    color: #3a3020;
    letter-spacing: 0.8px;
    line-height: 1.4;
    text-transform: uppercase;
  }

  /* Right bottom */
  .right-bottom {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
  }
  .radiation-symbol {
    font-size: 28px;
    color: #e6c020;
    text-shadow: 0 0 4px rgba(230,192,32,0.4);
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
  }
  .right-tiny-text {
    font-family: var(--font-tech);
    font-size: 7px;
    color: #5a5040;
    letter-spacing: 0.5px;
    font-style: italic;
  }
  .right-tiny-label {
    font-family: var(--font-tech);
    font-size: 7px;
    color: #5a5040;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  /* === RESPONSIVE === */
  @media (max-width: 1100px) {
    .map-body {
      grid-template-columns: 150px 1fr 120px;
    }
  }
  @media (max-width: 800px) {
    .map-body {
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
    }
    .map-left {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    .crt-screen {
      min-height: 280px;
    }
    .map-right {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
