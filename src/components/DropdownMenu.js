import React from 'react';
import PropTypes from 'prop-types';
import UpArrow from '../assets/up-arrow.svg';
import DownArrow from '../assets/down-arrow.svg';
import '../dropdown.scss';

export function DropdownMenu(props) {
  // get and store the props
  const menuTitle = props.menuTitle;
  const isListOpen = props.isListOpen;
  const multipleSelect = props.multipleSelect;
  const listItems = props.listItems;
  const selectedItems = props.selectedItems;
  const toggleList = props.toggleList;
  const handleSelect = props.handleSelect;
  const handleSelectAll = props.handleSelectAll;
  const handleDeselectAll = props.handleDeselectAll;
  const handleSelectNone = props.handleSelectNone;

  return (
    <div className="dropdown-wrapper">
      <div className="dropdown_selected" onClick={toggleList}>
        <div className="dropdown-menu-text">
          {/* display menu title here if  no items have been selected,
            or display the list of selected items in the order they were selected */}
          {selectedItems.length === 0
            ? (<div className="default-title">{menuTitle}</div>)
            : [...selectedItems].reverse().map((item, index) => {
              if (index < selectedItems.length - 1) {
                return `${item.name}, `
              } else {
                return `${item.name}`
              }
            }
          )}
        </div>
        {isListOpen
          ? <img src={UpArrow} alt="up arrow"/>
          : <img src={DownArrow} alt="down arrow"/>}
      </div>
      {isListOpen && (
        <ul className="dropdown_options">
          {/* show select all button if multi-select menu is toggled */}
          {multipleSelect && (
            <li className="dropdown_option"
                value='select all'
                onClick={handleSelectAll}
            >
              Select all
            </li>
          )}
          {/* show deselect all button if multi-select menu is toggled */}
          {multipleSelect && (
            <li className="dropdown_option"
                value='deselect all'
                onClick={handleDeselectAll}
            >
              Deselect all
            </li>)}
          {/* show None button if single-select menu is toggled */}
          {!multipleSelect && (
            <li className="dropdown_option"
                value='none'
                onClick={handleSelectNone}>
              None
            </li>
          )}
          {listItems.map((item, index) => (
            <li className="dropdown_option"
                key={index}
                value={item.name}
                onClick={() => handleSelect(item)}
            >
              {multipleSelect && (
                <input className="dropdown_option-checkbox" type="checkbox" checked={selectedItems.includes(item)}></input>
              )}
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

DropdownMenu.defaultProps = {
  menuTitle: "Select",
};

DropdownMenu.propTypes = {
  menuTitle: PropTypes.string,
  isListOpen: PropTypes.bool.isRequired,
  multipleSelect: PropTypes.bool.isRequired,
  listItems: PropTypes.array.isRequired,
  selectedItems: PropTypes.array.isRequired,
  toggleList: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleSelectAll: PropTypes.func.isRequired,
  handleDeselectAll: PropTypes.func.isRequired,
  handleSelectNone: PropTypes.func.isRequired,
}
