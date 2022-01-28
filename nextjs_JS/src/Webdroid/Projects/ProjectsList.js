import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Pagination, Tabs, Tab, Box } from '@mui/material';
//
import ProjectItem from './ProjectItem';

// ----------------------------------------------------------------------

ProjectsList.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default function ProjectsList({ projects }) {
  const [selected, setSelected] = useState('All');

  const getCategories = projects.map((project) => project.category);

  const categories = ['All', ...Array.from(new Set(getCategories))];

  const filtered = applyFilter(projects, selected);

  const handleChangeCategory = (event, newValue) => {
    setSelected(newValue);
  };

  console.log(filtered)

  return (
    <>
      <Box
        sx={{
          pt: 5,
          pb: { xs: 5, md: 10 },
        }}
      >
        <Tabs
          value={selected}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeCategory}
        >
          {categories.map((category) => (
            <Tab key={category} value={category} label={category} />
          ))}
        </Tabs>
      </Box>

      <Box
        sx={{
          display: 'grid',
          rowGap: { xs: 4, md: 5 },
          columnGap: 4,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
        }}
      >
        {filtered.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </Box>

      <Pagination
        count={10}
        color="primary"
        size="large"
        sx={{
          pt: 10,
          pb: { xs: 10, md: 15 },
          '& .MuiPagination-ul': {
            justifyContent: 'center',
          },
        }}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter(arr, category) {
  if (category !== 'All') {
    arr = arr.filter((project) => project.frontmatter.category === category);
  }
  return arr;
}
