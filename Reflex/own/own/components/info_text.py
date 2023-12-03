import reflex as rx 
from own.styles import styles
from own.styles.colors import TextColor as TextColor
from own.styles.colors import Color as Color


def info_text(title:str,body:str) -> rx.Component:
    return rx.box(
        rx.span(
            title, 
            font_weight='bold',
            color=Color.PRIMARY.value,
            ),  
        f" {body}",
        font_size=styles.Size.DEFAULT.value,
        color=TextColor.BODY.value,
    )
      
      
      
      
