import React, { ReactElement,useEffect } from "react";
import anime from 'animejs';


interface Props {}

export default function NameSVG({}: Props): ReactElement {
  useEffect(()=>{
    anime({
      targets:".logoDiv .logoSVG path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function (el, i) {
        return i * 100;
      },
    })
  },[])
  return (
    <div className = "logoDiv">
      <svg
        width="923"
        height="101"
        viewBox="0 0 923 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className = "logoSVG" 
        style={{padding:"5px"}}
      >
        <path
          d="M53.552 6.128V73.04H44.816V42.704H10.736V73.04H2V6.128H10.736V35.504H44.816V6.128H53.552Z"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M115.125 20.432V73.04H106.389V65.264C104.725 67.952 102.389 70.064 99.3808 71.6C96.4368 73.072 93.1728 73.808 89.5888 73.808C85.4928 73.808 81.8128 72.976 78.5488 71.312C75.2848 69.584 72.6928 67.024 70.7728 63.632C68.9168 60.24 67.9888 56.112 67.9888 51.248V20.432H76.6288V50.096C76.6288 55.28 77.9408 59.28 80.5648 62.096C83.1888 64.848 86.7728 66.224 91.3168 66.224C95.9888 66.224 99.6688 64.784 102.357 61.904C105.045 59.024 106.389 54.832 106.389 49.328V20.432H115.125Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M151.571 19.568C156.115 19.568 160.083 20.56 163.475 22.544C166.931 24.528 169.491 27.024 171.155 30.032V20.432H179.987V74.192C179.987 78.992 178.963 83.248 176.915 86.96C174.867 90.736 171.923 93.68 168.083 95.792C164.307 97.904 159.891 98.96 154.835 98.96C147.923 98.96 142.163 97.328 137.555 94.064C132.947 90.8 130.227 86.352 129.395 80.72H138.035C138.995 83.92 140.979 86.48 143.987 88.4C146.995 90.384 150.611 91.376 154.835 91.376C159.635 91.376 163.539 89.872 166.547 86.864C169.619 83.856 171.155 79.632 171.155 74.192V63.152C169.427 66.224 166.867 68.784 163.475 70.832C160.083 72.88 156.115 73.904 151.571 73.904C146.899 73.904 142.643 72.752 138.803 70.448C135.027 68.144 132.051 64.912 129.875 60.752C127.699 56.592 126.611 51.856 126.611 46.544C126.611 41.168 127.699 36.464 129.875 32.432C132.051 28.336 135.027 25.168 138.803 22.928C142.643 20.688 146.899 19.568 151.571 19.568ZM171.155 46.64C171.155 42.672 170.355 39.216 168.755 36.272C167.155 33.328 164.979 31.088 162.227 29.552C159.539 27.952 156.563 27.152 153.299 27.152C150.035 27.152 147.059 27.92 144.371 29.456C141.683 30.992 139.539 33.232 137.939 36.176C136.339 39.12 135.539 42.576 135.539 46.544C135.539 50.576 136.339 54.096 137.939 57.104C139.539 60.048 141.683 62.32 144.371 63.92C147.059 65.456 150.035 66.224 153.299 66.224C156.563 66.224 159.539 65.456 162.227 63.92C164.979 62.32 167.155 60.048 168.755 57.104C170.355 54.096 171.155 50.608 171.155 46.64Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M217.694 73.904C212.766 73.904 208.286 72.784 204.254 70.544C200.286 68.304 197.15 65.136 194.846 61.04C192.606 56.88 191.486 52.08 191.486 46.64C191.486 41.264 192.638 36.528 194.942 32.432C197.31 28.272 200.51 25.104 204.542 22.928C208.574 20.688 213.086 19.568 218.078 19.568C223.07 19.568 227.582 20.688 231.614 22.928C235.646 25.104 238.814 28.24 241.118 32.336C243.486 36.432 244.67 41.2 244.67 46.64C244.67 52.08 243.454 56.88 241.022 61.04C238.654 65.136 235.422 68.304 231.326 70.544C227.23 72.784 222.686 73.904 217.694 73.904ZM217.694 66.224C220.83 66.224 223.774 65.488 226.526 64.016C229.278 62.544 231.486 60.336 233.15 57.392C234.878 54.448 235.742 50.864 235.742 46.64C235.742 42.416 234.91 38.832 233.246 35.888C231.582 32.944 229.406 30.768 226.718 29.36C224.03 27.888 221.118 27.152 217.982 27.152C214.782 27.152 211.838 27.888 209.15 29.36C206.526 30.768 204.414 32.944 202.814 35.888C201.214 38.832 200.414 42.416 200.414 46.64C200.414 50.928 201.182 54.544 202.718 57.488C204.318 60.432 206.43 62.64 209.054 64.112C211.678 65.52 214.558 66.224 217.694 66.224Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M365.846 6.128L346.454 73.04H336.662L321.11 19.184L304.982 73.04L295.286 73.136L276.566 6.128H285.878L300.47 62.864L316.598 6.128H326.39L341.75 62.672L356.438 6.128H365.846Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M398.35 73.904C393.422 73.904 388.942 72.784 384.91 70.544C380.942 68.304 377.806 65.136 375.502 61.04C373.262 56.88 372.142 52.08 372.142 46.64C372.142 41.264 373.294 36.528 375.598 32.432C377.966 28.272 381.166 25.104 385.198 22.928C389.23 20.688 393.742 19.568 398.734 19.568C403.726 19.568 408.238 20.688 412.27 22.928C416.302 25.104 419.47 28.24 421.774 32.336C424.142 36.432 425.326 41.2 425.326 46.64C425.326 52.08 424.11 56.88 421.678 61.04C419.31 65.136 416.078 68.304 411.982 70.544C407.886 72.784 403.342 73.904 398.35 73.904ZM398.35 66.224C401.486 66.224 404.43 65.488 407.182 64.016C409.934 62.544 412.142 60.336 413.806 57.392C415.534 54.448 416.398 50.864 416.398 46.64C416.398 42.416 415.566 38.832 413.902 35.888C412.238 32.944 410.062 30.768 407.374 29.36C404.686 27.888 401.774 27.152 398.638 27.152C395.438 27.152 392.494 27.888 389.806 29.36C387.182 30.768 385.07 32.944 383.47 35.888C381.87 38.832 381.07 42.416 381.07 46.64C381.07 50.928 381.838 54.544 383.374 57.488C384.974 60.432 387.086 62.64 389.71 64.112C392.334 65.52 395.214 66.224 398.35 66.224Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M462.444 19.472C468.844 19.472 474.028 21.424 477.996 25.328C481.964 29.168 483.949 34.736 483.949 42.032V73.04H475.309V43.28C475.309 38.032 473.996 34.032 471.372 31.28C468.748 28.464 465.165 27.056 460.621 27.056C456.013 27.056 452.333 28.496 449.581 31.376C446.893 34.256 445.548 38.448 445.548 43.952V73.04H436.812V20.432H445.548V27.92C447.276 25.232 449.612 23.152 452.556 21.68C455.564 20.208 458.86 19.472 462.444 19.472Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M519.915 19.568C524.459 19.568 528.427 20.56 531.819 22.544C535.275 24.528 537.835 27.024 539.499 30.032V20.432H548.331V74.192C548.331 78.992 547.307 83.248 545.259 86.96C543.211 90.736 540.267 93.68 536.427 95.792C532.651 97.904 528.235 98.96 523.179 98.96C516.267 98.96 510.507 97.328 505.899 94.064C501.291 90.8 498.571 86.352 497.739 80.72H506.379C507.339 83.92 509.323 86.48 512.331 88.4C515.339 90.384 518.955 91.376 523.179 91.376C527.979 91.376 531.883 89.872 534.891 86.864C537.963 83.856 539.499 79.632 539.499 74.192V63.152C537.771 66.224 535.211 68.784 531.819 70.832C528.427 72.88 524.459 73.904 519.915 73.904C515.243 73.904 510.987 72.752 507.147 70.448C503.371 68.144 500.395 64.912 498.219 60.752C496.043 56.592 494.955 51.856 494.955 46.544C494.955 41.168 496.043 36.464 498.219 32.432C500.395 28.336 503.371 25.168 507.147 22.928C510.987 20.688 515.243 19.568 519.915 19.568ZM539.499 46.64C539.499 42.672 538.699 39.216 537.099 36.272C535.499 33.328 533.323 31.088 530.571 29.552C527.883 27.952 524.907 27.152 521.643 27.152C518.379 27.152 515.403 27.92 512.715 29.456C510.027 30.992 507.883 33.232 506.283 36.176C504.683 39.12 503.883 42.576 503.883 46.544C503.883 50.576 504.683 54.096 506.283 57.104C507.883 60.048 510.027 62.32 512.715 63.92C515.403 65.456 518.379 66.224 521.643 66.224C524.907 66.224 527.883 65.456 530.571 63.92C533.323 62.32 535.499 60.048 537.099 57.104C538.699 54.096 539.499 50.608 539.499 46.64Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M599.574 34.16V41.552H561.27V34.16H599.574Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M649.473 38.576C651.905 38.96 654.113 39.952 656.097 41.552C658.145 43.152 659.745 45.136 660.897 47.504C662.113 49.872 662.721 52.4 662.721 55.088C662.721 58.48 661.857 61.552 660.129 64.304C658.401 66.992 655.873 69.136 652.545 70.736C649.281 72.272 645.409 73.04 640.929 73.04H615.969V6.128H639.969C644.513 6.128 648.385 6.896 651.585 8.432C654.785 9.904 657.185 11.92 658.785 14.48C660.385 17.04 661.185 19.92 661.185 23.12C661.185 27.088 660.097 30.384 657.921 33.008C655.809 35.568 652.993 37.424 649.473 38.576ZM624.705 35.024H639.393C643.489 35.024 646.657 34.064 648.897 32.144C651.137 30.224 652.257 27.568 652.257 24.176C652.257 20.784 651.137 18.128 648.897 16.208C646.657 14.288 643.425 13.328 639.201 13.328H624.705V35.024ZM640.161 65.84C644.513 65.84 647.905 64.816 650.337 62.768C652.769 60.72 653.985 57.872 653.985 54.224C653.985 50.512 652.705 47.6 650.145 45.488C647.585 43.312 644.161 42.224 639.873 42.224H624.705V65.84H640.161Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M722.844 44.72C722.844 46.384 722.748 48.144 722.556 50H680.508C680.828 55.184 682.588 59.248 685.788 62.192C689.052 65.072 692.988 66.512 697.596 66.512C701.372 66.512 704.508 65.648 707.004 63.92C709.564 62.128 711.356 59.76 712.38 56.816H721.788C720.38 61.872 717.564 66 713.34 69.2C709.116 72.336 703.868 73.904 697.596 73.904C692.604 73.904 688.124 72.784 684.156 70.544C680.252 68.304 677.18 65.136 674.94 61.04C672.7 56.88 671.58 52.08 671.58 46.64C671.58 41.2 672.668 36.432 674.844 32.336C677.02 28.24 680.06 25.104 683.964 22.928C687.932 20.688 692.476 19.568 697.596 19.568C702.588 19.568 707.004 20.656 710.844 22.832C714.684 25.008 717.628 28.016 719.676 31.856C721.788 35.632 722.844 39.92 722.844 44.72ZM713.82 42.896C713.82 39.568 713.084 36.72 711.612 34.352C710.14 31.92 708.124 30.096 705.564 28.88C703.068 27.6 700.284 26.96 697.212 26.96C692.796 26.96 689.02 28.368 685.884 31.184C682.812 34 681.052 37.904 680.604 42.896H713.82Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M743.111 28.976C744.647 25.968 746.823 23.632 749.639 21.968C752.519 20.304 756.007 19.472 760.103 19.472V28.496H757.799C748.007 28.496 743.111 33.808 743.111 44.432V73.04H734.375V20.432H743.111V28.976Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M766.923 46.544C766.923 41.168 768.011 36.464 770.188 32.432C772.364 28.336 775.339 25.168 779.115 22.928C782.955 20.688 787.211 19.568 791.883 19.568C796.491 19.568 800.491 20.56 803.883 22.544C807.275 24.528 809.803 27.024 811.467 30.032V20.432H820.299V73.04H811.467V63.248C809.739 66.32 807.147 68.88 803.691 70.928C800.299 72.912 796.331 73.904 791.787 73.904C787.115 73.904 782.891 72.752 779.115 70.448C775.339 68.144 772.364 64.912 770.188 60.752C768.011 56.592 766.923 51.856 766.923 46.544ZM811.467 46.64C811.467 42.672 810.667 39.216 809.067 36.272C807.467 33.328 805.291 31.088 802.539 29.552C799.851 27.952 796.875 27.152 793.611 27.152C790.347 27.152 787.371 27.92 784.683 29.456C781.995 30.992 779.851 33.232 778.251 36.176C776.651 39.12 775.852 42.576 775.852 46.544C775.852 50.576 776.651 54.096 778.251 57.104C779.851 60.048 781.995 62.32 784.683 63.92C787.371 65.456 790.347 66.224 793.611 66.224C796.875 66.224 799.851 65.456 802.539 63.92C805.291 62.32 807.467 60.048 809.067 57.104C810.667 54.096 811.467 50.608 811.467 46.64Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M843.798 28.976C845.334 25.968 847.51 23.632 850.326 21.968C853.206 20.304 856.694 19.472 860.79 19.472V28.496H858.486C848.694 28.496 843.798 33.808 843.798 44.432V73.04H835.062V20.432H843.798V28.976Z"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M867.611 46.544C867.611 41.168 868.699 36.464 870.875 32.432C873.051 28.336 876.027 25.168 879.803 22.928C883.643 20.688 887.931 19.568 892.667 19.568C896.763 19.568 900.571 20.528 904.091 22.448C907.611 24.304 910.299 26.768 912.155 29.84V2H920.987V73.04H912.155V63.152C910.427 66.288 907.867 68.88 904.475 70.928C901.083 72.912 897.115 73.904 892.571 73.904C887.899 73.904 883.643 72.752 879.803 70.448C876.027 68.144 873.051 64.912 870.875 60.752C868.699 56.592 867.611 51.856 867.611 46.544ZM912.155 46.64C912.155 42.672 911.355 39.216 909.755 36.272C908.155 33.328 905.979 31.088 903.227 29.552C900.539 27.952 897.563 27.152 894.299 27.152C891.035 27.152 888.059 27.92 885.371 29.456C882.683 30.992 880.539 33.232 878.939 36.176C877.339 39.12 876.539 42.576 876.539 46.544C876.539 50.576 877.339 54.096 878.939 57.104C880.539 60.048 882.683 62.32 885.371 63.92C888.059 65.456 891.035 66.224 894.299 66.224C897.563 66.224 900.539 65.456 903.227 63.92C905.979 62.32 908.155 60.048 909.755 57.104C911.355 54.096 912.155 50.608 912.155 46.64Z"
          stroke="white"
          stroke-width="3"
        />
      </svg>
    </div>
  );
}
