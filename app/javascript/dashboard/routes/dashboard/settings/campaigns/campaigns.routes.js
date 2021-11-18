import Index from './Index';
import SettingsContent from '../Wrapper';
import { frontendURL } from '../../../../helper/URLHelper';

export default {
  routes: [
    {
      path: frontendURL('accounts/:accountId/campaigns'),
      component: SettingsContent,
      props: {
        headerTitle: 'CAMPAIGN.ONGOING.HEADER',
        icon: 'ion-arrow-swap',
      },
      children: [
        {
          path: '',
          redirect: 'ongoing',
        },
        {
          path: 'ongoing',
          name: 'settings_account_campaigns',
          roles: ['administrator'],
          component: { ...Index },
        },
      ],
    },
   
  ],
};
