export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60e1d7872ad04efc3ce5e7cc',
                  title: 'Sanity Studio',
                  name: 'sanityandnextjs-studio',
                  apiId: 'ea3d1bae-04f1-4db2-aacd-37278f310c71'
                },
                {
                  buildHookId: '60e1d78753caab03d551470e',
                  title: 'Blog Website',
                  name: 'sanityandnextjs',
                  apiId: '9f1505cd-a819-4416-86c0-5feaa6d83194'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Taideptrai/sanityAndNextJs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanityandnextjs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
