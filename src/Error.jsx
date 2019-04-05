import React from 'react';

const stylesheet = `
.Web3Provider-container {
  font-family: Helvetica, Arial;
  color: hsl(0,0%,50%);
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  background: hsl(0, 0%, 95%);
  background: -webkit-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  background: -moz-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  background: -o-linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
  background: linear-gradient(hsl(0, 0%, 100%), hsl(0, 0%, 95%));
}
.Web3Provider-wrapper {
  width: 400px;
  border: 1px solid hsl(207, 90%, 54%);
  border-radius: 20px;
  text-align: center;
  padding: 50px 40px;
  margin: 80px auto;
}
.Web3Provider-image {
  max-height: 175px;
}
.Web3Provider-title {
  margin-top: 50px;
  color: hsl(0,0%,25%);
}
.Web3Provider-message {
  line-height: 27px;
  font-size: 18px;
  color: hsl(0,0%,50%);
}
`;

function IconNoWeb3(props) {
  return (
    <svg width="100%" height="100%" viewBox="0 0 332 417" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <path d="M198.610685,43.1017808 C107.24977,43.1017808 33.1017808,117.24977 33.1017808,208.610685 C33.1017808,299.971599 107.24977,374.119588 198.610685,374.119588 C289.971599,374.119588 364.119588,299.971599 364.119588,208.610685 C364.119588,117.24977 289.971599,43.1017808 198.610685,43.1017808 L198.610685,43.1017808 Z M198.610685,341.017808 C125.455749,341.017808 66.2035615,281.76562 66.2035615,208.610685 C66.2035615,177.991537 76.6306225,149.855024 94.1745663,127.511322 L279.710047,313.046803 C257.366345,330.590747 229.229832,341.017808 198.610685,341.017808 L198.610685,341.017808 Z M303.046803,289.710047 L117.511322,104.174566 C139.855024,86.6306225 167.991537,76.2035615 198.610685,76.2035615 C271.76562,76.2035615 331.017808,135.455749 331.017808,208.610685 C331.017808,239.229832 320.590747,267.366345 303.046803,289.710047 L303.046803,289.710047 Z" id="path-1"></path>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Group" transform="translate(-33.000000, 0.000000)">
          <g id="Ethereum_logo_2014" opacity="0.208899457" transform="translate(71.000000, 0.000000)" fillRule="nonzero">
            <polygon id="Shape" fill="#343434" points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"></polygon>
            <polygon id="Shape" fill="#8C8C8C" points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"></polygon>
            <polygon id="Shape" fill="#3C3C3B" points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"></polygon>
            <polygon id="Shape" fill="#8C8C8C" points="127.962 416.9052 127.962 312.1852 0 236.5852"></polygon>
            <polygon id="Shape" fill="#141414" points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"></polygon>
            <polygon id="Shape" fill="#393939" points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"></polygon>
          </g>
          <g id="ic_do_not_disturb" transform="translate(0.000000, 10.000000)"></g>
          <polygon id="Bounds" points="0 10 397.221369 10 397.221369 407.221369 0 407.221369"></polygon>
          <g id="Icon">
            <use fill="#FFE1DE" fillRule="evenodd" xlinkHref="#path-1"></use>
            <path stroke="#FFFFFF" strokeWidth="6" d="M198.610685,46.1017808 C288.314745,46.1017808 361.119588,118.906624 361.119588,208.610685 C361.119588,298.314745 288.314745,371.119588 198.610685,371.119588 C108.906624,371.119588 36.1017808,298.314745 36.1017808,208.610685 C36.1017808,118.906624 108.906624,46.1017808 198.610685,46.1017808 Z M198.610685,344.017808 C123.798895,344.017808 63.2035615,283.422474 63.2035615,208.610685 C63.2035615,178.077442 73.3736714,149.145233 91.8150049,125.658629 L93.9040007,122.998115 L284.223254,313.317368 L281.56274,315.406364 C258.076136,333.847698 229.143927,344.017808 198.610685,344.017808 Z M303.317368,294.223254 L112.998115,103.904001 L115.658629,101.815005 C139.145233,83.3736714 168.077442,73.2035615 198.610685,73.2035615 C273.422474,73.2035615 334.017808,133.798895 334.017808,208.610685 C334.017808,239.143927 323.847698,268.076136 305.406364,291.56274 L303.317368,294.223254 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default function ErrorTemplate(props) {
  return (
    <div className="Web3Provider-container">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }}
      />
      <div className="Web3Provider-wrapper">
        <div className="Web3Provider-image">
          <IconNoWeb3 />
        </div>
        <h1
          className="Web3Provider-title"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <p
          className="Web3Provider-message"
          dangerouslySetInnerHTML={{ __html: props.message }}
        />
      </div>
    </div>
  )
}

export const AccountUnavailable = ErrorTemplate.bind(null, {
  title: 'No ETH Account Available',
  message: `
It seems that you don&apos;t have an ETH account selected. If using
MetaMask, please make sure that your wallet is unlocked and that
you have at least one account in your accounts list.`
});

export const Web3Unavailable = ErrorTemplate.bind(null, {
  title: 'Web3 Not Found',
  message: `
It seems that you are using a browser without Web3 capabilities. Please
make sure that you are using a web3-capable browser like mist or parity.
If you are using MetaMask or Parity extension, make sure that it is
enabled.
`
});
