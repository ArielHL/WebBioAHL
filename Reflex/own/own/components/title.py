import reflex as rx 
from own.styles import styles


def title(text:str) -> rx.Component:
    return rx.heading(
        text,
        size='lg',
        style=styles.title_style,
        )