import PhotoLogin from '@assets/PhotoLogin.png'
import ArrowLeft from '@assets/Vector.png'
import Logo from '@assets/Logo.png'
import Image from 'next/image'
import ArrowRight from '@assets/ArrowRight.png'
import Link from 'next/link'

const LoginBox = () => {
	return (
		<div className='registerBox'>
			<div className='box'>
				<div className='left'>
					<div className='miniNavbar'>
						<div className='arrow'>
							<Link passHref href='/'>
								<Image src={ArrowLeft} alt=''></Image>
							</Link>
						</div>
						<div className='logo'>
							<Image src={Logo} alt=''></Image>
						</div>
						<div className='extra'></div>
					</div>
					<div className='form'>
						<div className='labelEmail'>Email</div>
						<input type='text' />
						<div className='labelSenha'>Senha</div>
						<input type='text' />
						<button>Entrar</button>
					</div>
					<div className='logar'>
						<span>Não tem uma conta?</span>
						<Link passHref href='/Register'>
							<span className='fazerLogin'>
								Registre-se
								<Image src={ArrowRight} alt=''></Image>
							</span>
						</Link>
					</div>
				</div>
				<div className='right'>
					<Image src={PhotoLogin} alt=''></Image>
				</div>
			</div>
		</div>
	)
}

export default LoginBox
