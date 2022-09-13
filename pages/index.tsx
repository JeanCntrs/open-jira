import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { EntryList } from '../context/ui';

const HomePage: NextPage = () => {
    return (
        <Layout title='Home - OpenJira'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='Pendings' />
                        <EntryList />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='In Progress' />
                        <EntryList />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='Completed' />
                        <EntryList />
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default HomePage;
