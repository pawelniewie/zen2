import React from 'react';
import ListingLayout from 'app/layouts/ListingLayout';
import Button from 'app/components/Button';
import SearchBar from 'app/components/SearchBar';

export default function ProjectsList() {
    return <ListingLayout title="Projects" sideHeaderContent={[
        <Button isSmall={true}>Create project</Button>,
        <SearchBar placeholder="Filter projects" className={ListingLayout.filterClass}/>
    ]}>

    </ListingLayout>
};