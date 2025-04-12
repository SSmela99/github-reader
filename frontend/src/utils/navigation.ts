let navigate: ((path: string) => void) | null = null;

export const setNavigate = (nav: (path: string) => void) => {
    navigate = nav;
};

export const goTo = (path: string) => {
    if (navigate) {
        navigate(path);
    } else {
        console.warn('navigate is not set');
    }
};

