import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Mascota (potrace) como data URI — Satori rasteriza `<img>` data URIs de forma
 * fiable. Arte original SIN alterar: recuadro blanco, rasgos negros.
 */
const MASCOT_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1032 975"><rect width="1032" height="975" rx="120" fill="#ffffff"/><g transform="translate(0,975) scale(0.1,-0.1)" fill="#000000" stroke="none"><path d="M0 4875 l0 -4875 5160 0 5160 0 0 4875 0 4875 -5160 0 -5160 0 0 -4875z m5830 4685 c326 -28 543 -114 795 -314 50 -40 124 -110 164 -155 94 -103 169 -144 265 -144 71 -1 153 32 195 77 l24 25 36 -19 c99 -50 247 -165 490 -382 66 -59 210 -178 318 -264 123 -97 253 -212 344 -303 153 -154 365 -389 357 -397 -3 -2 -65 11 -139 30 -218 55 -372 71 -689 71 -236 0 -296 -4 -424 -24 -371 -57 -743 -162 -1031 -291 -180 -80 -532 -274 -737 -405 -26 -16 -89 -57 -140 -89 -197 -126 -426 -281 -503 -341 -318 -248 -478 -517 -516 -864 -35 -322 40 -565 321 -1036 227 -381 345 -530 600 -754 331 -291 757 -504 1189 -595 333 -71 808 -79 1201 -20 275 40 749 151 985 229 249 82 506 205 690 328 268 181 436 339 530 501 21 35 30 44 36 34 4 -8 13 -83 19 -166 15 -187 8 -1043 -9 -1147 -43 -269 -150 -473 -366 -695 -189 -195 -585 -573 -778 -743 -415 -365 -1043 -774 -1692 -1102 -415 -209 -605 -278 -960 -350 -452 -91 -918 -112 -1445 -64 -131 11 -702 77 -740 84 -14 3 -185 21 -380 40 -723 72 -924 104 -1165 187 -461 159 -934 484 -1346 925 -387 414 -689 997 -929 1796 -33 110 -59 202 -56 204 2 2 64 -25 137 -61 261 -128 504 -189 948 -236 632 -69 1108 23 1686 324 255 132 498 291 670 436 144 121 307 302 399 443 42 65 137 260 156 322 7 22 28 75 47 118 29 66 36 96 43 185 5 59 18 159 30 222 31 167 38 360 15 452 -34 143 -116 279 -265 443 -314 345 -661 548 -1095 641 -305 65 -583 96 -845 93 -180 -1 -218 1 -310 21 -147 31 -334 37 -475 16 -237 -37 -432 -90 -604 -166 -40 -17 -75 -29 -78 -26 -6 6 96 173 196 321 192 284 399 527 690 814 376 369 666 595 1071 833 802 472 1642 795 2355 908 244 39 494 49 715 30z m642 -2664 c-11 -279 84 -564 289 -868 108 -160 337 -404 494 -525 285 -222 784 -444 1295 -577 245 -64 365 -78 610 -73 176 4 231 9 300 26 146 37 241 71 373 136 90 45 126 58 123 47 -3 -10 -12 -51 -21 -92 -49 -239 -134 -406 -267 -521 -269 -236 -610 -414 -1002 -523 -495 -139 -910 -206 -1273 -206 -397 0 -704 61 -1026 206 -236 105 -463 263 -667 464 -153 149 -245 278 -438 610 -154 265 -209 396 -231 548 -21 146 11 327 81 458 108 201 271 333 888 719 182 114 456 274 470 275 3 0 4 -47 2 -104z m-4926 -500 c-14 -111 37 -377 110 -575 63 -169 183 -396 292 -551 169 -241 512 -596 708 -732 57 -40 185 -107 259 -136 158 -62 438 -87 640 -59 61 9 118 19 128 22 35 14 16 -20 -45 -77 -334 -315 -887 -620 -1318 -727 -177 -45 -286 -56 -525 -55 -230 0 -390 15 -649 60 -314 53 -560 160 -797 345 -131 103 -129 100 -144 202 -35 231 -47 439 -42 677 4 129 13 285 21 346 31 233 101 487 199 718 l50 118 118 78 c219 145 437 256 634 325 90 31 333 84 353 77 11 -4 12 -18 8 -56z"/><path d="M4255 2903 c-137 -72 -116 -224 43 -315 31 -18 104 -69 162 -114 284 -221 479 -318 663 -331 227 -16 434 119 492 321 24 81 18 204 -11 243 -51 68 -144 94 -213 59 -40 -21 -93 -84 -131 -155 -37 -69 -51 -76 -131 -69 -69 7 -194 71 -331 170 -192 139 -236 167 -304 188 -81 25 -195 26 -239 3z"/></g></svg>`;
const MASCOT_DATA_URI = `data:image/svg+xml,${encodeURIComponent(MASCOT_SVG)}`;

/**
 * Tarjeta Open Graph 1200×630 con la estética dark comic de la marca: fondo
 * azul-noche con glow rosa, la mascota y el título. Fuentes del sistema.
 */
export const renderOg = (title: string, eyebrow: string, description = "") =>
  new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "#120f23",
        backgroundImage:
          "radial-gradient(1200px 520px at 86% -16%, rgba(255,46,151,0.22), transparent)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={MASCOT_DATA_URI} width={64} height={64} alt="" />
        <div
          style={{
            display: "flex",
            gap: "8px",
            fontSize: "30px",
            fontWeight: 800,
            letterSpacing: "0.5px",
            color: "#f5f4ff",
          }}
        >
          <span style={{ color: "#ff2e97" }}>Fantastic</span>
          <span>English Class</span>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        <div
          style={{
            fontSize: "22px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "#ff2e97",
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: "68px",
            fontWeight: 800,
            lineHeight: 1.05,
            color: "#f5f4ff",
            maxWidth: "980px",
          }}
        >
          {title}
        </div>
        {description ? (
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              lineHeight: 1.35,
              color: "#b0accd",
              maxWidth: "900px",
            }}
          >
            {description}
          </div>
        ) : null}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "24px",
          color: "#8f8baf",
        }}
      >
        <span>Chihuahua, México</span>
        <span>Presencial u online</span>
      </div>
    </div>,
    { ...ogSize },
  );
