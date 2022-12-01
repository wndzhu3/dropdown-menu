// container for the dropdown menu

import React, { useState, useEffect } from 'react';
import { DropdownMenu } from '../components/DropdownMenu';

export function DropdownMenuContainer(props) {
  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const menuTitle = props.menuTitle;
  const multipleSelect = props.multipleSelect;
  const items = props.options;

  // close the dropdown menu if it is open when the user clicks outside
  useEffect(() => {
    setTimeout(() => {
      if (isListOpen) {
        window.addEventListener('click', handleClickOut);
      } else {
        window.removeEventListener('click', handleClickOut);
      }
    }, 0);

    return () => {
      window.removeEventListener('click', handleClickOut);
    };
  });

  const handleClickOut = () => {
    if (isListOpen) {
      setIsListOpen(false);
    }
  };

  // open and close the list
  const toggleList = () => {
    setIsListOpen((prevState) => {
      return !prevState;
    });
  };

  // handle when an item is selected by adding it to the list of selections
  // in multi-select, uncheck an item if it's selected again
  // in single-select, nothing happens if you select the same option again
  const handleSelect = (item) => {
    if (multipleSelect) {
      if (!selectedItems.includes(item)) {
        setSelectedItems((prev) => {
          return [item, ...prev];
        });
      } else {
        setSelectedItems((prev) => {
          return prev.filter((listItem) => item !== listItem);
        });
      }
    } else {
      setSelectedItems(() => {
        return [item];
      });
      toggleList();
    }
  };

  // select all items in a multi-select dropdown menu
  const handleSelectAll = () => {
    setSelectedItems(items);
  };

  // deselect all items in a multi-select dropdown menu
  const handleDeselectAll = () => {
    setSelectedItems([]);
  };

  // select the "None" option in a single-select dropdown menu
  const handleSelectNone = () => {
    setSelectedItems([]);
    toggleList();
  }

  return (
    <DropdownMenu
      menuTitle={menuTitle}
      isListOpen={isListOpen}
      multipleSelect={multipleSelect}
      listItems={items}
      selectedItems={selectedItems}
      toggleList={toggleList}
      handleSelect={handleSelect}
      handleSelectAll={handleSelectAll}
      handleDeselectAll={handleDeselectAll}
      handleSelectNone={handleSelectNone}
    />
  );
}
