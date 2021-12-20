// eslint-disable-next-line import/no-anonymous-default-export
export default theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '&:hover': {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.40)"
        }
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        width: "224px",
        height: "224px",
        marginTop: "5px",
        marginLeft: "auto",
        marginRight: "auto"
    },
    cardContent: {
        flexGrow: 1,
    },
    typography: {
        padding: theme.spacing(2),
        width: 500
    },
});