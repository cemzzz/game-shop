import React from 'react'
import './Login.css';
import { Container, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBattleNet, faPlaystation, faSteam, faXbox } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';




const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault() //리프레시 방지
    setAuthenticate(true)
    navigate('/')
  }
  return (
    <div>
      <Container className='login-container'>
        <div className='login-title-logo'> JHS GAMES </div>
        <div className='login-title-text'>로그인</div>
        <Form onSubmit={(event)=>loginUser(event)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control className='login-input-form' type="email" placeholder="이메일 주소" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control className='login-input-form' type="password" placeholder="비밀번호" />
          </Form.Group>
          <div className='forget-pwd'>비밀번호를 잊으셨나요?</div>
          <Button className='login-button' variant="primary" type="submit">
            로그인
          </Button>
        </Form>
        <div className='social-login-container'>
          <div className='social-login-noti-text'>
            다른 계정으로 로그인 
          </div>
          <div className='social-login-icon-container'>
            <FontAwesomeIcon className='social-icon steam-icon' icon={faSteam} />
            <FontAwesomeIcon className='social-icon battleNet-icon' icon={faBattleNet} />
            <FontAwesomeIcon className='social-icon ps-icon' icon={faPlaystation} />
            <FontAwesomeIcon className='social-icon xBox-icon' icon={faXbox} />
          </div>
        </div>
      </Container>  
    </div>
  )
}

export default Login