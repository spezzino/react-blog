import React from 'react';
import PropTypes from 'prop-types';

const List = (props: any) => {
  const { items, component: Component } = props;

  return (
    <div>
      {
        items.map((item: any) => 
            <Component key={item.id} {...item} />
        )
      }
    </div>
  );
}

List.propTypes = {
  items: PropTypes.array,
  component: PropTypes.elementType
};

export { List };