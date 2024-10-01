import React from 'react'
import './SpecInfo.css';

const SpecInfo = () => {
  return (
    <div className='spec-info-container'>
        <div className='spec-info-sub-container'>
            <div>
                <div>최소 사양</div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>운영체제</div>
                    <div className='spec-info-content'>Windows 10 64비트(최신 업데이트)</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>프로세서</div>
                    <div className='spec-info-content'>Intel Core i5-6600K @ 3.50GHz 또는 AMD Ryzen 5 1600 @ 3.2 Ghz</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>메모리</div>
                    <div className='spec-info-content'>8GB</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>스토리지</div>
                    <div className='spec-info-content'>100GB</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>DirectX</div>
                    <div className='spec-info-content'>12(기능 레벨 12_0) 호환 비디오 카드 또는 동급</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>그래픽 카드</div>
                    <div className='spec-info-content'>NVIDIA GeForce GTX 1050 Ti 4GB 또는 AMD Radeon RX 570 4GB</div>
                </div>
            </div>
            <div>
                <div>권장 사양</div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>운영체제</div>
                    <div className='spec-info-content'>Windows 10 64비트(최신 업데이트)</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>프로세서</div>
                    <div className='spec-info-content'>Intel Core i7-6700 @ 3.40GHz 또는 AMD Ryzen 7 2700X @ 3.7 Ghz</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>메모리</div>
                    <div className='spec-info-content'>12GB</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>스토리지</div>
                    <div className='spec-info-content'>100GB</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>DirectX</div>
                    <div className='spec-info-content'>12(기능 레벨 12_0) 호환 비디오 카드 또는 동급</div>
                </div>
                <div className='spec-info-detail-container'>
                    <div className='spec-info-title'>그래픽 카드</div>
                    <div className='spec-info-content'>NVIDIA GeForce GTX 1660 또는 AMD RX 5600 XT</div>
                </div>
            </div>
        </div>
        <div className='spec-language-container'>
            <div className='spec-language-title'>지원 언어</div>
            <div className='spec-language-title-text'>텍스트</div>
            <div className='spec-language-content-text'>한국어, 아랍어, 포르투갈어(브라질), 중국어(간체), 중국어(번체), 체코어, 덴마크어, 네덜란드어, 영어, 프랑스어, 독일어, 이탈리아어, 일본어, 노르웨이어, 폴란드어, 포르투갈어, 러시아어, 스페인어(라틴 아메리카), 스페인어(스페인), 스웨덴어, 튀르키예어</div>
            <div className='spec-language-title-text'>오디오</div>
            <div className='spec-language-content-text'>한국어, 아랍어, 포르투갈어(브라질), 중국어(간체), 네덜란드어, 영어, 프랑스어, 독일어, 이탈리아어, 일본어, 폴란드어, 러시아어, 스페인어(스페인), 스페인어(라틴 아메리카)</div>
        </div>
        <div className='warning-content'>
            본 소프트웨어는 다운로드 후에는 재화의 가치가 현저히 감소하기 때문에 환불되지 않습니다. 관련 법률에 따라 재화의 가치가 손상되지 않은, 즉 다운로드 하지 않은 경우에 한하여 제품 수령일로부터 14일 이내 환불을 요청하신 경우에만 환불 처리가 가능합니다.
            본 제품의 구매 또는 사용을 위해서는 SEN 이용약관에 동의하셔야 합니다.
        </div>
    </div>
  )
}

export default SpecInfo