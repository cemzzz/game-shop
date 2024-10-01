import React from 'react'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div>
            <p className='footer-content'>
                © 2024, JHS Games, Inc. 모든 권리 보유. JHS Games, JHS Games 로고,
                한국 및 기타 국가에서 JHS Games, Inc.의 상표 또는 등록 상표입니다.
            </p>
            <p className='footer-content'>
                기타 브랜드 또는 제품 이름은 해당 소유자의 상표입니다.  
                웹사이트에는 타사가 제공하는 다른 사이트 및 리소스에 대한 링크가 포함될 수 있습니다.
            </p>
            <p className='footer-content'>
                이러한 링크는 이용자의 편의를 위해서만 제공합니다. 
                에픽게임즈는 해당 웹 사이트 또는 리소스의 내용을 통제할 수 없으며
                해당 사이트나 리소스 사용으로 인해 발생할 수 있는 손실이나 손해에 대해 책임을 지지 않습니다. 
            </p> 
        </div>
        <div className='footer-line'></div>
        <div className='footer-notify-container'>
            <div className='footer-notify-sub-container'>
                <div className='footer-notify-content'>이용약관</div>
                <div className='footer-notify-content'>개인정보처리방침</div>
                <div className='footer-notify-content'>스토어 환불 정책</div>
            </div>
            <div className='footer-notify-sub-container'>
                <FontAwesomeIcon className='footer-notify-icon' icon={faGamepad} />
                <div className='footer-notify-content'>JHS Games</div>
            </div>
        </div>
    </div>
  )
}
