<template>
  <div class="page">
    <div class="box">
      <svg viewBox="0 0 730 561">
        <defs>
          <linearGradient :id="`greenGradient${item}`" v-for="item in ARROW_COUNT" :key="item">
            <stop offset="0" stop-color="#14D82F" :stop-opacity="1 - (item - 1) * ARRPW_PERCENT" />
            <stop offset="100%" stop-color="#14D82F" :stop-opacity="1 - item * ARRPW_PERCENT" />
          </linearGradient>

          <linearGradient :id="`orangeGradient${item}`" v-for="item in ARROW_COUNT" :key="item">
            <stop offset="0" stop-color="#F5BC6E" :stop-opacity="1 - (item - 1) * ARRPW_PERCENT" />
            <stop offset="100%" stop-color="#F5BC6E" :stop-opacity="1 - item * ARRPW_PERCENT" />
          </linearGradient>
        </defs>

        <!-- 背景蓝色光环 -->
        <path
          d="M152.444292,118.156631 L492.312457,209.128474 C501.980784,211.716376 509.532541,219.268132 512.120443,228.936459 L603.092286,568.804625 C607.090738,583.742725 598.2224,599.093834 583.2843,603.092286 C578.541228,604.361855 573.547697,604.361855 568.804625,603.092286 L228.936459,512.120443 C219.268132,509.532541 211.716376,501.980784 209.128474,492.312457 L118.156631,152.444292 C114.158179,137.506192 123.026516,122.155083 137.964617,118.156631 C142.707689,116.887062 147.70122,116.887062 152.444292,118.156631 Z"
          transform="rotate(-45) translate(-315.5, 114)"
          fill="none"
          stroke="#2A73E1"
          stroke-width="8"
          opacity="0.2"
        ></path>
        <!-- 背景蓝色光环上的点 -->
        <path
          d="M152.444292,118.156631 L492.312457,209.128474 C501.980784,211.716376 509.532541,219.268132 512.120443,228.936459 L603.092286,568.804625 C607.090738,583.742725 598.2224,599.093834 583.2843,603.092286 C578.541228,604.361855 573.547697,604.361855 568.804625,603.092286 L228.936459,512.120443 C219.268132,509.532541 211.716376,501.980784 209.128474,492.312457 L118.156631,152.444292 C114.158179,137.506192 123.026516,122.155083 137.964617,118.156631 C142.707689,116.887062 147.70122,116.887062 152.444292,118.156631 Z"
          transform="rotate(-45) translate(-315.5, 114)"
          fill="none"
          stroke="#2A73E1"
          stroke-width="2"
          stroke-dasharray="4 4"
        ></path>

        <g transform="rotate(-45) translate(-315.5, 114)">
          <g>
            <!-- 左侧光伏发电绿色箭头 -->
            <rect
              width="3"
              height="6"
              :fill="`url(#greenGradient${item})`"
              v-for="item in ARROW_COUNT"
              :key="item"
              transform="translate(-3, -3)"
            >
              <animateMotion
                path="M272,150 L152.444292,118.156631 C147.70122,116.887062 142.707689,116.887062 137.964617,118.156631 C123.026516,122.155083 114.158179,137.506192 118.156631,152.444292 L150,270"
                :begin="10 * item + 'ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </rect>
            <path d="M0,-4 L8,2 L0,10 Z" fill="#14D82F" transform="translate(-3, -3)">
              <animateMotion
                path="M272,150 L152.444292,118.156631 C147.70122,116.887062 142.707689,116.887062 137.964617,118.156631 C123.026516,122.155083 114.158179,137.506192 118.156631,152.444292 L150,270"
                :begin="'0ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </path>
          </g>

          <g>
            <!-- 上面光伏发电绿色箭头 -->
            <rect
              width="3"
              height="6"
              :fill="`url(#greenGradient${item})`"
              v-for="item in ARROW_COUNT"
              :key="item"
              transform="translate(-3, -3)"
            >
              <animateMotion
                path="M410, 187 L492.312457,209.128474 C501.980784,211.716376 509.532541,219.268132 512.120443,228.936459 L538,326"
                :begin="10 * item + 'ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </rect>
            <path d="M0,-4 L8,2 L0,10 Z" fill="#14D82F" transform="translate(-3, -3)">
              <animateMotion
                path="M410, 187 L492.312457,209.128474 C501.980784,211.716376 509.532541,219.268132 512.120443,228.936459 L538,326"
                :begin="'0ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </path>
          </g>

					<!-- 下面储能放电橙色箭头 -->
          <g>
            <rect
              width="3"
              height="6"
              :fill="`url(#orangeGradient${item})`"
              v-for="item in ARROW_COUNT"
              :key="item"
              transform="translate(-3, -3)"
            >
              <animateMotion
                path="M330, 540 L228.936459,512.120443 C219.268132,509.532541 211.716376,501.980784 209.128474,492.312457 L181.5, 390"
                :begin="10 * item + 'ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </rect>
            <path d="M0,-4 L8,2 L0,10 Z" fill="#F5BC6E" transform="translate(-3, -3)">
              <animateMotion
                path="M330, 540 L228.936459,512.120443 C219.268132,509.532541 211.716376,501.980784 209.128474,492.312457 L181.5, 390"
                :begin="'0ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </path>
          </g>

          <g>
            <!-- 右侧下方储能充电绿色箭头 -->
            <rect
              width="3"
              height="6"
              :fill="`url(#greenGradient${item})`"
              v-for="item in ARROW_COUNT"
              :key="item"
              transform="translate(-3, -3)"
            >
              <animateMotion
                path="M583.2843,603.092286 C578.541228,604.361855 573.547697,604.361855 568.804625,603.092286 L460, 574"
                :begin="10 * item + 'ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </rect>
            <path d="M0,-4 L8,2 L0,10 Z" fill="#14D82F" transform="translate(-3, -3)">
              <animateMotion
                path="M583.2843,603.092286 C578.541228,604.361855 573.547697,604.361855 568.804625,603.092286 L460, 574"
                :begin="'0ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </path>
          </g>

          <g>
            <!-- 右侧上方储能放电橙色箭头 -->
            <rect
              width="3"
              height="6"
              :fill="`url(#orangeGradient${item})`"
              v-for="item in ARROW_COUNT"
              :key="item"
              transform="translate(-3, -3)"
            >
              <animateMotion
                path="M583.2843,603.092286 C598.2224,599.093834 607.090738,583.742725 603.092286,568.804625 L568.5,440"
                :begin="10 * item + 'ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </rect>
            <path d="M0,-4 L8,2 L0,10 Z" fill="#F5BC6E" transform="translate(-3, -3)">
              <animateMotion
                path="M583.2843,603.092286 C598.2224,599.093834 607.090738,583.742725 603.092286,568.804625 L568.5,440"
                :begin="'0ms'"
                dur="3s"
                repeatCount="indefinite"
                rotate="auto"
              ></animateMotion>
            </path>
          </g>
        </g>
        <image href="./images/img.png" alt="" width="730" height="561" x="0" y="0" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "TurnRoundArrow",
};
</script>
<script setup>
import { ref } from "vue";

const ARROW_COUNT = ref(60);
const ARRPW_PERCENT = ref(1 / ARROW_COUNT.value);
</script>

<style lang="scss" scoped>
.page {
  height: 100vh;
  background-color: #0d1e50;
  display: flex;
  justify-content: center;
  align-items: center;
  .box{
    width: 50vw;
  }
}

</style>
