const KakaoIcon = ({ fill, className }: { fill?: boolean; className?: string }) => {
  return (
    <svg className={className} width="30" height="29" viewBox="0 0 30 29" fill={fill ? "#FEE500" : "#464646"} xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.1918 24.6242C14.298 24.6306 13.4104 24.5887 12.5259 24.4596C12.3915 24.4403 12.2852 24.4661 12.1727 24.5499L11.9595 24.7043C10.2742 25.9241 8.58948 27.1436 6.85009 28.2828C6.6973 28.3842 6.53842 28.4762 6.37877 28.5686C6.3098 28.6085 6.24069 28.6485 6.17187 28.6893C6.09061 28.7377 6.00622 28.7668 5.91246 28.7797C5.6218 28.8216 5.45302 28.6442 5.51553 28.3473C5.5995 27.9343 5.71275 27.5294 5.82596 27.1245C5.85602 27.017 5.88608 26.9096 5.91559 26.8019C6.27188 25.5082 6.63131 24.2144 6.99073 22.9206C7.02199 22.8077 7.01261 22.7529 6.89697 22.6948C5.18736 21.8011 3.67778 20.6364 2.44949 19.1103C1.23057 17.594 0.408585 15.8872 0.117921 13.9385C-0.2165 11.7091 0.164802 9.60231 1.20557 7.62456C2.22446 5.68875 3.69653 4.18851 5.47178 2.99476C7.36891 1.72358 9.45044 0.929901 11.6664 0.51693C13.3197 0.213653 14.9856 0.136221 16.6577 0.294312C19.805 0.587909 22.7085 1.5913 25.2682 3.54001C26.9685 4.83377 28.3343 6.42759 29.1656 8.4505C30.4971 11.6865 30.2189 14.8193 28.4468 17.8037C27.3122 19.7169 25.7183 21.1526 23.8493 22.2689C22.0647 23.3368 20.1425 24.0111 18.1079 24.3628C17.1421 24.5306 16.167 24.6177 15.1856 24.6242H15.1918ZM22.1578 11.58C22.1646 11.5695 22.1712 11.5588 22.1779 11.5481L22.1779 11.5481C22.2019 11.5096 22.226 11.4708 22.2578 11.438C22.9954 10.6734 23.7362 9.90873 24.4769 9.14731C24.7551 8.86016 25.0957 8.81822 25.427 9.02471C25.7583 9.23119 25.924 9.63449 25.824 9.98938C25.7865 10.1249 25.7052 10.2314 25.6083 10.3314C25.381 10.5649 25.154 10.7993 24.9271 11.0337C24.5487 11.4245 24.1702 11.8155 23.7893 12.2027C23.7049 12.2898 23.708 12.3382 23.7768 12.4317C24.2955 13.1357 24.8123 13.8435 25.3287 14.5507L25.3288 14.5508L25.329 14.5511L25.3298 14.5522L25.7958 15.1902C26.0896 15.5935 26.049 16.1065 25.7052 16.4227C25.3208 16.7744 24.7519 16.7195 24.43 16.284C23.8269 15.4678 23.2299 14.6484 22.633 13.8289L22.6329 13.8287C22.6287 13.8226 22.6246 13.8165 22.6207 13.8104L22.6206 13.8104L22.6206 13.8103C22.61 13.7941 22.5997 13.7783 22.586 13.7642C22.5606 13.7391 22.5418 13.7059 22.5233 13.6732C22.4895 13.6135 22.4567 13.5554 22.386 13.5513C22.3016 13.5448 22.1047 13.8642 22.1047 13.9675C22.1047 14.1204 22.1049 14.2735 22.1051 14.4267V14.427V14.4273V14.4275V14.4277V14.4279C22.1057 14.8885 22.1063 15.35 22.1016 15.8097C22.0953 16.2388 21.8047 16.5776 21.389 16.6615C21.0139 16.7357 20.6201 16.5227 20.4576 16.1517C20.4045 16.0291 20.3795 15.9033 20.3795 15.7678V9.68611C20.3795 9.17635 20.7608 8.78273 21.239 8.77951C21.7171 8.77951 22.0984 9.16989 22.1047 9.67966C22.1089 10.0669 22.1075 10.4556 22.1061 10.8438V10.8438V10.8438V10.8439V10.8442V10.8446V10.845C22.1054 11.0385 22.1047 11.232 22.1047 11.4251V11.5477L22.1578 11.5832V11.58ZM5.83698 10.6967V13.2358V13.2391C5.83698 13.5228 5.83629 13.8065 5.83559 14.0902L5.83559 14.0908C5.8342 14.6587 5.83281 15.2265 5.83698 15.7943C5.84011 16.417 6.39956 16.83 6.97464 16.6429C7.35281 16.5203 7.56847 16.1976 7.56847 15.7459C7.56847 15.1835 7.56881 14.621 7.56916 14.0586C7.56986 12.9336 7.57055 11.8087 7.56847 10.6838C7.56847 10.5644 7.59347 10.5225 7.71849 10.5225C7.97473 10.5268 8.23097 10.5254 8.48721 10.5239H8.48734C8.61549 10.5232 8.74363 10.5225 8.87177 10.5225C8.95928 10.5225 9.04679 10.5225 9.13118 10.4967C9.54374 10.3805 9.8094 9.98692 9.76252 9.55136C9.71563 9.10936 9.35308 8.77704 8.89365 8.77704C7.43095 8.77382 5.97137 8.77382 4.5118 8.77704C4.00548 8.77704 3.63668 9.1642 3.63981 9.66429C3.64293 10.1547 4.01486 10.5225 4.51805 10.5225L4.68281 10.524C5.01232 10.5272 5.34183 10.5303 5.67133 10.5193C5.8151 10.5128 5.83698 10.5644 5.83698 10.6967ZM15.6072 12.6863V9.66967C15.6072 9.19862 15.9354 8.83727 16.4011 8.77597C16.8167 8.72113 17.2293 9.01472 17.3418 9.44705C17.3674 9.54677 17.3671 9.6465 17.3669 9.74622L17.3668 9.77614V14.7447C17.3668 14.8867 17.4012 14.9222 17.5356 14.9189C18.0982 14.9092 18.6639 14.9092 19.2264 14.9189C19.6671 14.9254 20.0172 15.2674 20.0359 15.6868C20.0547 16.132 19.7171 16.5353 19.2796 16.5418C18.3076 16.5547 17.3324 16.5547 16.3573 16.5418C15.9354 16.5353 15.6041 16.1611 15.6041 15.7191V12.6863H15.6072ZM14.2285 13.0649C14.4909 13.7765 14.7529 14.4869 15.0132 15.1973V15.194C15.1132 15.4683 15.1757 15.749 15.1507 16.0458C15.1289 16.3007 15.0101 16.4813 14.7726 16.5717C14.5975 16.6362 14.4194 16.6781 14.2319 16.6652C13.8881 16.6427 13.6287 16.5104 13.5161 16.1361C13.4611 15.952 13.3923 15.7726 13.3236 15.5937C13.2791 15.4779 13.2347 15.3623 13.1942 15.2456C13.1598 15.1456 13.1161 15.1101 13.0098 15.1101C12.7284 15.1171 12.4454 15.1157 12.1631 15.1144C12.0503 15.1139 11.9377 15.1134 11.8253 15.1134C11.6919 15.1134 11.5586 15.1141 11.4252 15.1148C11.1585 15.1162 10.8918 15.1177 10.6251 15.1134C10.5345 15.1134 10.4907 15.1392 10.4595 15.2295C10.3946 15.4141 10.3261 15.5974 10.2577 15.7802C10.2173 15.8882 10.177 15.996 10.1376 16.1039C9.97191 16.5523 9.66874 16.733 9.19993 16.662C8.59672 16.5684 8.38732 16.249 8.51546 15.6102C8.5751 15.3166 8.68189 15.0403 8.78886 14.7636C8.82763 14.6633 8.86643 14.5629 8.90302 14.4616C9.41386 13.0582 9.92953 11.6598 10.4458 10.2598C10.517 10.0667 10.5883 9.87345 10.6595 9.68021C10.8314 9.21239 11.1471 8.89944 11.6284 8.79942C12.1722 8.6865 12.7442 9.04785 12.9629 9.63181C13.1918 10.2451 13.4176 10.8601 13.6435 11.4755C13.7384 11.7341 13.8334 11.9929 13.9287 12.2516C14.0287 12.5229 14.1286 12.794 14.2285 13.0649ZM11.4252 13.5343C11.4815 13.535 11.5377 13.5357 11.594 13.5357H12.6817C12.3941 12.6936 12.1128 11.8677 11.819 11.003C11.7836 11.1059 11.7535 11.1947 11.7256 11.2775C11.7018 11.3478 11.6795 11.4138 11.6565 11.4805C11.6191 11.5903 11.5817 11.7003 11.5442 11.8102C11.3628 12.3431 11.181 12.8771 10.997 13.4066C10.9627 13.5131 10.9783 13.5421 11.0877 13.5357C11.2002 13.5314 11.3127 13.5328 11.4252 13.5343Z"
      />
    </svg>
  );
};

export default KakaoIcon;
