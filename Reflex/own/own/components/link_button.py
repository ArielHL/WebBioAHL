import reflex as rx 
from own.styles import styles



def link_button (title:str,
                 body:str,
                 image:str,
                 url:str) -> rx.Component:
    return rx.link( 
                rx.button(
                    rx.hstack(
                        rx.image(
                            src=image,
                            width=styles.Size.LARGE.value,
                            height=styles.Size.LARGE.value,
                            margin=styles.Size.MEDIUM.value,
                            alt=title
                ),
                        rx.vstack(
                            rx.text(title,style=styles.button_title_style),
                            rx.text(body,style=styles.button_body_style),
                            align_items='start',
                            spacing=styles.Size.SMALL.value,
                            padding_y=styles.Size.VERY_SMALL.value,
                            margin=styles.Size.ZERO.value,
                            padding_rigth=styles.Size.SMALL.value,
                            
                            ),
                        width='100%',
                             )
                         ),
                href=url,
                is_external=True,
                width='100%',   
                 ) 