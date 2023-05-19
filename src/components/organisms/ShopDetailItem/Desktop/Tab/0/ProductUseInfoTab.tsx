const data = `
• 소파의 수평을 유지해 삐걱거림과 틀어짐을 방지해주세요.
• 소파에 강한 충격을 주거나, 팔걸이, 등받이, 소파 앞쪽 프레임에 걸터 앉는 것을 주의해주세요. 제품 모양이 변형되고 손상되는 원인이 됩니다.
• 건조 시 헤어드라이어 사용을 삼가해주세요. 바람의 열기에 의해 패브릭이 수축 또는 변형될 수 있으니 자연 건조를 권장합니다.
• 이동 시 소파 밑 부분을 들어 옮겨주세요. 좌방석, 등쿠션을 잡아당기면 커버가 손상될 수 있습니다. 바닥 긁힘을 방지하기 위해 반드시 들어서 옮겨주세요.`;
const ProductUseInfoTab = () => {
   return (
      <div>
         <pre className={'text-sm leading-[24px] max-w-[600px] whitespace-pre-wrap'}>{data}</pre>
      </div>
   );
};
export default ProductUseInfoTab;
