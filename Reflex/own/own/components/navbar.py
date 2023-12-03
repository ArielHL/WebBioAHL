import reflex as rx 
from own.styles import styles
from own.styles.colors import TextColor as TextColor
from own.styles.colors import Color as Color


def navbar() -> rx.Component:
    return rx.hstack(
        
                rx.box(
                    rx.span('Ariel',color=Color.PRIMARY.value),
                    rx.span('Limes',color=Color.SECONDARY.value),
                    style=styles.navbar_title_style
                    
                    ),
                rx.spacer(),
                rx.input(
                    placeholder="Search...",
                    width="300px",
                    padding=styles.Size.SMALL.value,
                    border_radius=styles.Size.MEDIUM.value,
                    background_color='white',
                    border='1px solid ligtblue'
                    ),
                rx.spacer(),
                rx.menu(
                    rx.menu_button("Menu",style=styles.navbar_title_style),
                    rx.menu_list(
                        rx.menu_item("User Settings"),
                        rx.menu_divider(),
                        rx.menu_item("Explore"),
                        rx.menu_item("Log Out"),
                        
                    ),
                    style=styles.navbar_title_style,
                    
                ),
            
                position='sticky',
                bg=Color.CONTENT.value,
                width='100%',
                padding_x=styles.Size.BIG.value,
                padding_y=styles.Size.DEFAULT.value,
                z_index='100',
                top='0px',
                display='flex',
                align_items='center',
      
    )   