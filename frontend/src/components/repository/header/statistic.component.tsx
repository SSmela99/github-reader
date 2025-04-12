import { Box, Typography } from '@mui/material';

interface RepoStatProps {
    label: string;
    count: number;
    icon: JSX.Element;
}

const RepositoryStatistic = ({ label, count, icon }: RepoStatProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                background: (theme) => theme.palette.gray.medium,
                height: 'fit-content',
                p: 1,
                borderRadius: 3,
                border: '1px solid #111111',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                }}
            >
                {icon}
                <Typography>{label}</Typography>
                <Box
                    sx={{
                        background: (theme) => theme.palette.gray.light,
                        color: (theme) => theme.palette.primary.dark,
                        borderRadius: '100%',
                        minWidth: '24px',
                        height: '24px',
                        textAlign: 'center',
                        px: 1,
                        fontSize: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {count}
                </Box>
            </Box>
        </Box>
    );
};

export default RepositoryStatistic;

