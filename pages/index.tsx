import type { NextPage } from 'next';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { Layout } from '../components/layouts';
import { EntryList, NewEntry } from '../context/ui';

const HomePage: NextPage = () => {
    return (
        <Layout title='Home - OpenJira'>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='Pendings' />
                        <NewEntry />
                        <EntryList status='pending' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='In Progress' />
                        <EntryList status='inProgress' />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ height: 'calc(100vh - 100px)' }}>
                        <CardHeader title='Completed' />
                        <EntryList status='finished' />
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default HomePage;
