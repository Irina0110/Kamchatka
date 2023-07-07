import * as S from './style';
import Logo from '@/assets/Logo.svg';

const Header = () => {
    return (
        <S.Header>
            <S.Logo src={Logo}/>
            <S.Menu>
                <S.Navigation>
                    <S.NavLink href={'#'}>Расписание тура</S.NavLink>
                    <S.NavLink href={'#'}>Как записаться</S.NavLink>
                    <S.NavLink href={'#'}>Команда</S.NavLink>
                </S.Navigation>
                <S.BookingButton>Забронировать</S.BookingButton>
            </S.Menu>
        </S.Header>
    )
}

export default Header;