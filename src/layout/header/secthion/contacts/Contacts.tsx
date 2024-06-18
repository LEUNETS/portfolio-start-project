import React, {ElementRef, useRef} from "react";
import {SecthionTitle} from "../../../../components/SecthionTitle";
import {Button} from "../../../../components/Button";
import {Container} from "../../../../components/Container";
import {S} from './Contact_Styles'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_ivnpdvy', 'template_rh2wm97', form.current, {
                publicKey: 'fMS8LsnllBTpv2pBF',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };
    return (
        <S.Contacts id={"contact"}>
            <Container>
                <SecthionTitle>Contact</SecthionTitle>
                <S.Form ref={form} onSubmit={sendEmail}>
                    <S.Field required placeholder={"name"} name={'user_name'}/>
                    <S.Field required placeholder={"email"} name={'user_name'}/>
                    <S.Field required placeholder={"subject"} name={'subject'}/>
                    <S.Field required placeholder={"message"} as={"textarea"} name={'message'}/>
                    <Button type={"submit"}>Send Message</Button>
                </S.Form>
            </Container>

        </S.Contacts>
    );
};
