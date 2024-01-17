function Footer() {
    const date = new Date().getFullYear();
    return(

        <footer>
            <h6>
                Copyright: {date} &copy;
            </h6>
        </footer>
    )
}

export default Footer;