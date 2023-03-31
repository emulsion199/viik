export interface FaqCategory {
    title: string;
    items: {
       question: string;
       answer: string | null;
    }[];
 }

 export const FaqItems:FaqCategory[]=[
    {
        title:'주문',
        items:[{
            question:'상품을 대량으로 구매하고 싶은데 어떻게 하나요?',
            answer:'',
        },{
            question:'주문 상품의 전체 또는 일부 상품만 취소하고 싶어요.',
            answer:'',
        },{
            question:'주문한 상품의 색상과 모델, 수량을 변경하고 싶어요.',
            answer:'',
        }
    ]
    },
    {
        title:'배송',
        items:[{
            question:'배송 기간은 얼마나 걸리나요?',
            answer:"3~4주 가량 소요 됩니다. (제주도 제외) 직배송 기준이며, 택배 배송 시 주문 후 2주 가량 소요됩니다. 택배 배송 제품은 제품 설명란에 별도로 '택배 배송'이 기재되오니 확인 후 구매 바랍니다. 정확한 배송 일정은 사전 해피콜을 통해 안내해 드립니다.(연락처가 불분명하거나 부재중일 경우 배송이 지연될 수 있습니다.)"
        },{
            question:'제주도 및 도서 산간 지역은 배송이 가능한가요?',
            answer:'',
        },{
            question:'해외 배송도 가능한가요?',
            answer:'',
        }
    ]
    },

 ]