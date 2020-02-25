import React from 'react';
import { 
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrap,
    SearchInfo
 } from './style';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import { connect } from 'react-redux';


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe601;</span>
                </NavItem>
                <SearchWrap>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onBlur={props.handleBlur}
                            onFocus={props.handleFocus}
                        ></NavSearch>
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont':'iconfont'}>&#xe619;</span>
                    <SearchInfo>
                    </SearchInfo>
                </SearchWrap>
            </Nav>
            <Addition>
                <Button className="writting">
                    <span className="iconfont">&#xe608;</span>
                    写文章
                </Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused'])
        //完全等价state.get('header').get('focused')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleFocus() {
            const action = actionCreators.searchFocus();
            dispatch(action);
        },
        handleBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);