import reflex as rx
import own.constants as const
from own.styles.styles import Size as Size
from own.components.title import title
from own.components.link_sponsor import link_sponsor


def sponsors() -> rx.Component:
    return rx.vstack(
                title("Colaboran"),
                rx.flex(
                    link_sponsor(
                        "elgato.png",
                        const.ELGATO_URL,
                        alt='Logotipo de Elgato'
                    ),
                    link_sponsor(
                        "mvp.png",
                        const.MVP_URL,
                        alt='Logotipo de MVP'
                    ),
                    spacing=Size.MEDIUM.value,
                    width="100%",
                    align_items="center",
                    justify_content="space-evenly",
                    direction=['column', 'row'] 
                    
                ),
                width="100%",
                align_items="start",
                spacing=Size.MEDIUM.value
    )
