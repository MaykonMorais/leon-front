import ItemMenu from '@components/ItemMenu/ItemMenu'
import { Middle } from '@components/NavbarHome/styles'
import Link from 'next/link'

const MenuAdmin = () => {
	return (
		<Middle>
			<div className='grid grid-cols-3 gap-4'>
				<Link passHref href='/login'>
					<ItemMenu />
				</Link>
				<Link passHref href='/login'>
					<ItemMenu />
				</Link>
				<Link passHref href='/login'>
					<ItemMenu />
				</Link>
				<Link passHref href='/login'>
					<ItemMenu />
				</Link>
				<Link passHref href='/login'>
					<ItemMenu />
				</Link>
				<Link passHref href='/login'>
					<ItemMenu />
				</Link>
			</div>
		</Middle>
	)
}

export default MenuAdmin
