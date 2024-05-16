import React from 'react';
import SuperInput from './UI/input/SuperInput';
import SuperSelect from './UI/select/SuperSelect';

const TodoFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <SuperInput
                value={filter.query}
                placeholder="Поиск"
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            <SuperSelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue="Сортировка"
                options={[
                    { value: 'title', text: 'Заголовок' },
                    { value: 'body', text: 'Содержимое' }
                  ]}
            />
        </div>
    );
};

export default TodoFilter;