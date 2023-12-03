import reflex as rx 
import datetime
from own.styles import styles
from own.styles.colors import TextColor as TextColor
import own.constants as const


year = datetime.datetime.today().year

def footer() -> rx.Component:
    return rx.box(

                rx.flex(
                    rx.image(
                            src='logo.png',
                            height=styles.Size.VERY_BIG.value,
                            weight=styles.Size.VERY_BIG.value,       
                            alt='Logotipo de Ariel Limes' 
                            ),
                    rx.vstack(
                        rx.link(
                                f'© 2014-{year} DEEPBLUE BY Ariel Limes V3.',
                                href=const.MOUREDEV_URL,
                                is_external=True,
                                font_size=styles.Size.DEFAULT.value,
                                color=TextColor.BODY.value,
                                ), 
                        rx.text(
                                'Building Software with ♥ from Madrid to the World.',
                                font_size=styles.Size.DEFAULT.value,
                                margin_top=styles.Size.ZERO.value,
                                color=TextColor.BODY.value,
                                ),
                        padding=styles.Size.MEDIUM.value,
                        ),
                        direction=['column', 'row'],
                        justify_content='center',
                        align_items='center',
                        margin_y=styles.Size.BIG.value,
                        color=TextColor.FOOTER.value,
                        width='100%'
         
                            ),
       
            )
    