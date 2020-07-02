import React from 'react';
import { connect } from 'react-redux';
import { startLoginWithGoogle, startLoginWithFacebook } from '../actions/auth';
import { BoxLayout, BoxLayoutBox, Title, StyledForm, StyledInput, ForgotLink, LoginButton, ButtonContainer, GoogleButton, FacebookButton, StyledSpan, Footer, FooterText, SignUpLink, Line } from '../styles/Authentication';

export const LoginPage = ({ startLoginWithGoogle, startLoginWithFacebook }) => (
    <BoxLayout>
        <BoxLayoutBox>
            <Title> Log In </Title>
            <StyledForm>
                <StyledInput placeholder="Email"></StyledInput>
                <StyledInput placeholder="Password"></StyledInput>
                <ForgotLink to='/forgot'> Forgot password? </ForgotLink>
                <LoginButton> Continue </LoginButton>
            </StyledForm>
            <Line/>
            <ButtonContainer>
                <FacebookButton onClick={startLoginWithFacebook}> 
                    <img src="/images/facebook.svg" alt="facebook-logo" width="20" height="30"/>
                    <StyledSpan> Continue </StyledSpan>
                </FacebookButton>
                <GoogleButton onClick={startLoginWithGoogle}> 
                    <img src="/images/google.svg" alt="google-logo" width="20" height="30"/>
                    <StyledSpan> Continue </StyledSpan> 
                </GoogleButton>
            </ButtonContainer>
            <Line/>
            <Footer>
                <FooterText> Don't have an account? </FooterText>
                <SignUpLink to="/signup"> Sign Up </SignUpLink>
            </Footer>
        </BoxLayoutBox>
    </BoxLayout>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginWithGoogle: () => dispatch(startLoginWithGoogle()),
    startLoginWithFacebook: () => dispatch(startLoginWithFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);