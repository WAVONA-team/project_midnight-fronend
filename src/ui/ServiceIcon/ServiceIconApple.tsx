import React from 'react';

const ServiceIconApple: React.FC = React.memo(() => {
  return (
    <div
      className="
        relative
        p-6
        rounded-xl
        bg-gradient-to-r from-[rgba(248,251,255,0.04)] to-[rgba(255,255,255,0)]
        shadow-[inset_0_0_8px_0_#E84C8852]
        border-[0.8px]
        border-solid
        border-[#E84C8852]
      "
    >
      <div className="z-10 absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
        <div className="bg-on-primary-anti-flash-white w-7 h-7 flex justify-center items-center rounded-full shadow-lg shadow-[#E84C8852] ">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9886 7.14643C27.9886 6.2855 27.9159 5.42776 27.7103 4.58957C27.341 3.0628 26.4706 1.89631 25.1676 1.03961C24.4974 0.602147 23.7598 0.333585 22.9759 0.19164C22.374 0.0824712 21.7639 0.0325178 21.1533 0.0185083C21.1078 0.0140147 21.0578 0.00449362 21.0073 0H6.98057C6.80305 0.0140095 6.62524 0.0227376 6.44772 0.0317248C5.57704 0.081419 4.71192 0.172593 3.89097 0.500628C2.33268 1.11573 1.2067 2.19102 0.550575 3.7408C0.323049 4.26496 0.208208 4.82059 0.126986 5.386C0.0587283 5.8417 0.021961 6.30191 0.00873272 6.76237C0.00873272 6.79912 0 6.8348 0 6.87154V21.1319C0.00873065 21.2963 0.0185268 21.4599 0.0272575 21.6246C0.0867847 22.5775 0.209267 23.5207 0.610877 24.3959C1.36753 26.0503 2.63905 27.1388 4.38465 27.663C4.87198 27.8136 5.38285 27.8818 5.89293 27.9273C6.54059 27.9913 7.18718 28 7.83457 28H20.7036C21.3144 28 21.925 27.9588 22.5357 27.8819C23.4974 27.7584 24.3995 27.4759 25.2157 26.9385C26.1957 26.2911 26.9341 25.4344 27.4076 24.3634C27.6264 23.8706 27.7497 23.3475 27.8407 22.8181C27.9728 22.0299 28 21.2316 28 20.4346C27.9955 16.0041 28 11.5748 27.9955 7.14459L27.9886 7.14643ZM20.4961 11.7989V18.4622C20.4961 18.9496 20.4279 19.4283 20.2091 19.87C19.8723 20.5578 19.3254 20.991 18.5915 21.2009C18.1854 21.319 17.7664 21.383 17.3428 21.4015C16.2351 21.4565 15.2736 20.704 15.0776 19.6102C14.9088 18.708 15.3419 17.7141 16.2893 17.2494C16.6631 17.0675 17.069 16.9581 17.474 16.8759C17.9158 16.7805 18.3577 16.6938 18.7952 16.5931C19.1191 16.5204 19.3281 16.3245 19.3921 15.9912C19.4104 15.9185 19.4149 15.8405 19.4149 15.7681C19.4149 13.6487 19.4149 11.5296 19.4149 9.41546C19.4149 9.34277 19.4008 9.26929 19.3834 9.20082C19.3379 9.02346 19.2101 8.91824 19.0281 8.92697C18.8407 8.93569 18.6587 8.96821 18.4767 9.00495C17.5878 9.17809 16.6996 9.35599 15.8152 9.53784L11.4999 10.4085C11.4813 10.4128 11.4586 10.4226 11.4403 10.4226C11.1165 10.5135 11.0028 10.6597 10.9887 10.9964C10.9845 11.0464 10.9887 11.0971 10.9887 11.1471C10.9845 14.1824 10.9887 17.218 10.9845 20.2525C10.9845 20.7452 10.9295 21.2281 10.7342 21.6833C10.4104 22.4306 9.83654 22.9003 9.06216 23.1234C8.65182 23.2415 8.23274 23.3108 7.80387 23.3237C6.68741 23.365 5.75747 22.6222 5.56672 21.5239C5.40216 20.5763 5.83525 19.5552 6.91071 19.0992C7.32978 18.9261 7.76288 18.8306 8.2047 18.7394C8.53726 18.6712 8.87486 18.6031 9.20741 18.5349C9.65347 18.4394 9.88628 18.1569 9.90903 17.7009V17.5278C9.90903 14.073 9.90903 10.6184 9.90903 7.16388C9.90903 7.0177 9.92757 6.87259 9.95905 6.73091C10.0413 6.39838 10.2784 6.20673 10.5969 6.12875C10.8935 6.05078 11.1988 5.99659 11.4988 5.93262C12.3555 5.75949 13.2076 5.58637 14.0643 5.41746L16.7121 4.87928C17.496 4.72438 18.2746 4.56498 19.0588 4.41035C19.3141 4.36039 19.5741 4.30515 19.8329 4.28691C20.1927 4.25545 20.4438 4.48277 20.4805 4.84781C20.4893 4.93424 20.4946 5.02095 20.4946 5.10765C20.4946 7.33622 20.4946 9.56507 20.4946 11.7936L20.4961 11.7989Z"
              fill="url(#paint0_linear_3235_6777)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_3235_6777"
                x1="14"
                y1="28"
                x2="14"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FA253B" />
                <stop offset="0.509804" stopColor="#FC4058" />
                <stop offset="1" stopColor="#FE5C75" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
});

export default ServiceIconApple;
