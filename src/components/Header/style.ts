import styled from "@emotion/styled";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 167.111px;
  height: 37.176px;
`;

export const Menu = styled.div`
  display: flex;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 56px;
  margin-right: 64px;
  align-items: center;
`;

export const BookingButton = styled.div`
  user-select: none;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid var(--primary, #275553);
  color: var(--primary, #275553);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 11px 32px;
`;

export const NavLink = styled.a`
  color: var(--primary, #275553);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
`;