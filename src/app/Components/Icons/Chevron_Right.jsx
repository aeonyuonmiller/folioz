function Icon({color}) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        // height="23"
        fill="none"
        viewBox="0 0 15 23"
      >
        <path
          fill={color}
          d="M14.777 11.54c0 .429-.082.827-.246 1.194-.164.368-.433.73-.808 1.09l-8.426 8.262c-.5.5-1.113.75-1.84.75-.484 0-.934-.121-1.348-.363a2.861 2.861 0 01-.984-.973 2.5 2.5 0 01-.363-1.324c0-.742.3-1.406.902-1.992l6.914-6.657-6.914-6.632c-.601-.57-.902-1.23-.902-1.98a2.5 2.5 0 01.363-1.325c.25-.406.578-.73.984-.973A2.623 2.623 0 013.457.254c.727 0 1.34.25 1.84.75l8.426 8.25c.367.36.632.723.796 1.09.165.36.25.758.258 1.195z"
        ></path>
      </svg>
    );
  }
  
  export default Icon;
  