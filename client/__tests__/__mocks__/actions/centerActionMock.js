const imageUrl =
'http://www.topangacreekoutpost.com/assets/images/site/image_not_available.png';

export const activeCenter = {
  center: {
    id: 1,
    title: 'A Class Park Event Center Emerald Hall',
    img_url: imageUrl,
    description: 'this is a description for this center',
    facilities: ['parking', 'power'],
    capacity: 500,
    price: 100000
  }
};

export const centerFailure = {
  message: 'center could not be added',
  statusCode: 401
};

export const MakeCenterRequest = {
  startAddingCenter: true
};

export const expectedActions = [
  {
    payload:
    {
      scope: 'default'
    },
    type: 'loading-bar/SHOW'
  }, {
    payload: {
      data: { centers: [{ id: 1 }] },
      loadingmore: false,
      loadmore: false
    },
    type: 'FETCH_CENTERS'
  }, {
    payload: {
      scope: 'default'
    },
    type: 'loading-bar/HIDE'
  }
];

export const centers = {
  meta: {
    page: 2,
    pageCount: 10,
    totalCount: 13,
    pageSize: 5,
  },
  centers: [
    {
      id: 1,
      title: 'this is center 1',
      description: 'and description 1',
      capacity: 1500,
      price: 20000
    },
    {
      id: 2,
      title: 'this is center 4',
      description: 'and description 1',
      capacity: 200,
      price: 300000
    },
    {
      id: 3,
      title: 'this is center 1',
      description: 'and description 1',
      capacity: 600,
      price: 150000
    },
    {
      id: 4,
      title: 'this is center 1',
      description: 'and description 1',
      capacity: 1000,
      price: 60000
    }
  ]
};

export const facilitiesResources = [
  'Chairs',
  'Security',
  'Air Conditioner',
  'Tables',
  'Changing Room',
  'Parking Space',
  'Stage',
  'Lighting',
  'Power',
  'Generator',
  'Rest Room',
  'Television',
  'Swimming pool'
];
