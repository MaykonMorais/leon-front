import PhotoRegister from '@assets/PhotoRegister.png'
import ArrowLeft from '@assets/Vector.png'
import Logo from '@assets/Logo.png'
import Image from 'next/image'
import ArrowRight from '@assets/ArrowRight.png'
import Link from 'next/link'

const RegisterBox = () => {
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
					<div className='span'>Por favor, preencha os campos</div>
					<div className='form'>
						<div className='labelEmail'>Email</div>
						<input type='text' />
						<div className='labelSenha'>Escolha sua senha</div>
						<input type='text' />
						<div className='labelRepitaSenha'>Repita sua senha</div>
						<input type='text' />
						<button>Registrar</button>
					</div>
					<div className='logar'>
						<span>Já tem uma conta?</span>
						<Link passHref href='/login'>
							<span className='fazerLogin'>
								Faça login
								<Image src={ArrowRight} alt=''></Image>
							</span>
						</Link>
					</div>
				</div>
				<div className='right'>
					<Image src={PhotoRegister} alt=''></Image>
				</div>
			</div>
		</div>
	)
}

export default RegisterBox
