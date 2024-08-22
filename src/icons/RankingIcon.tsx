const RankingIcon = ({ fill }: { fill?: boolean }) => {
  return (
    <svg width="27" height="22" viewBox="0 0 27 22" fill={fill ? "#909090" : "none"} xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5001 3.61646C12.6101 3.61646 11.8872 2.88602 11.8872 1.98987C11.8872 1.09235 12.6115 0.363281 13.5001 0.363281C14.3887 0.363281 15.1116 1.09373 15.1116 1.98987C15.1116 2.88602 14.39 3.61646 13.5001 3.61646ZM1.61151 1.13632C2.5001 1.13632 3.22439 1.86677 3.22439 2.76291H3.22576C3.22576 3.65905 2.50284 4.3895 1.61288 4.3895C0.72292 4.3895 0 3.66044 0 2.76291C0 1.86539 0.72292 1.13632 1.61151 1.13632ZM25.3873 1.13632C24.4987 1.13632 23.7744 1.86677 23.7744 2.76291C23.7744 3.65905 24.4987 4.3895 25.3873 4.3895C26.2759 4.3895 27.0002 3.65905 27.0002 2.76291C27.0002 1.86677 26.2773 1.13632 25.3873 1.13632ZM24.0921 5.40434C24.3536 5.1558 24.7452 5.11161 25.0587 5.28974L25.0601 5.28836C25.3736 5.46648 25.5352 5.83101 25.4599 6.18588L22.2957 20.9812C22.2136 21.3623 21.8795 21.6357 21.492 21.6357H5.67406C5.28795 21.6357 4.95388 21.3637 4.87173 20.9826L1.70758 6.2204C1.63091 5.86553 1.79247 5.50238 2.10601 5.32426C2.41818 5.14613 2.81113 5.19446 3.07264 5.44301L8.74647 10.8282L12.9375 5.41125C13.0922 5.21103 13.3304 5.06743 13.5824 5.06743C13.8357 5.06743 14.0725 5.20965 14.2286 5.40987L18.4183 10.7867L24.0921 5.40434Z"
        fill="#464646"
      />
    </svg>
  );
};

export default RankingIcon;
