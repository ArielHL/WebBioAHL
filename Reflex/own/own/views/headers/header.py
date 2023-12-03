import reflex as rx 
from own.components.link_icon import link_icon
from own.components.info_text import info_text
from own.styles import styles
from own.components.title import title
from own.styles.colors import TextColor as TextColor
from own.styles.colors import Color as Color    
import own.constants as const
import datetime

def experience() -> int:
    return datetime.date.today().year - 1995



def header () -> rx.Component:
    return rx.vstack(
        
                    rx.hstack(
                        rx.avatar(
                            name="Ariel Limes",
                            size="xl",
                            color=TextColor.BODY.value,
                            bg=Color.CONTENT.value,
                            src='avatar.jpg',
                            padding='2px',
                            border="4px solid",
                            border_color=Color.PRIMARY.value,
                            ),
                        rx.flex(
                            rx.heading(
                                "Ariel Limes",
                                size='lg'
                                ),
                            rx.text(
                                "@arielimes",
                                margin_top=styles.Size.ZERO.value,
                                color=Color.PRIMARY.value,
                                
                            ),
                            rx.hstack(
                                link_icon(
                                    "icons/github.svg",
                                    const.GITHUB_URL,
                                    alt='Logotipo de Github'
                                ),
                                link_icon(
                                    "icons/x.svg",
                                    const.TWITTER_X_URL,
                                    alt='Logotipo de Twitter'
                                ),
                                link_icon(
                                    "icons/instagram.svg",
                                    const.INSTAGRAM_URL,
                                    alt='Logotipo de Instagram'
                                ),
                                link_icon(
                                    "icons/tiktok.svg",
                                    const.TIKTOK_URL,
                                    alt='Logotipo de Tiktok'
                                ),
                                link_icon(
                                    "icons/spotify.svg",
                                    const.SPOTIFY_URL,
                                    alt='Logotipo de Spotify'
                                ),
                                link_icon(
                                    "icons/linkedin.svg",
                                    const.LINKEDIN_URL,
                                    alt='Logotipo de Linkedin'
                                ),
                                spacing=styles.Size.LARGE.value,
                                margin_top=styles.Size.SMALL.value,
                            ),
                            direction="column",
                            aling_items="start",
                           
                              
                        ),
                        spacing=styles.Size.MEDIUM.value,
                    ),
                    rx.flex(
                        info_text(f"{experience()}+", "Años de experiencia"),
                        rx.spacer(),
                        info_text("15+", "Paginas Web"),
                        rx.spacer(),
                        info_text("25+", "Projectos"),
                        width="100%",
                        padding_X=styles.Size.LARGE.value,
                    ),
                    
                    rx.text(
                            f"""
                            Soy ingeniero de software desde hace más de {experience()} años. 
                            Actualmente trabajo como freelance full-stack developer iOS y Android. 
                            Además creo contenido formativo sobre programación y tecnología en redes. 
                            Aquí podrás encontrar todos mis enlaces de interés. ¡Bienvenid@!
                            """,
                            color=TextColor.BODY.value,
                            font_size=styles.Size.DEFAULT.value,
                            padding="2px"
                            
                            ),
                    spacing=styles.Size.LARGE.value,
                    align_items="start",
        
    )