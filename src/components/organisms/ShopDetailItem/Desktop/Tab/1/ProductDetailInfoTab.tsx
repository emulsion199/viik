const data = `
• 품명 FORLI
• 제조자 VIIK
• 제조국 대한민국
• 품질보증기준 관련법 및 소비자 분쟁 해결기준에 따름                                `;
const ProductDetailInfoTab = () => {
   return <pre className={'text-sm leading-[24px] max-w-[600px] whitespace-pre-wrap'}>{data}</pre>;
};
export default ProductDetailInfoTab;
