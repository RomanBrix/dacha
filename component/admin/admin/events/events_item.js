import React, {Component} from 'react';

export default class EventsItem extends Component {
    del(id){
        const { onDelete, toggleChange } = this.props;
        const kind = 'EVENTS';
        onDelete(kind, id);
        setTimeout(()=>{
            toggleChange(false);
        },200)

    }
    render(){
        const {isNew, position, events, toggleChange, addNews, updateNews} = this.props;
        let changeObject = {
            title: '',
            description: ''

        };

        if(!isNew){
            changeObject = {
                id: events[position].id,
                title: events[position].title,
                description: events[position].description
            }
        }
        return(
            <div className="content">
                <div className="back" onClick={()=>{toggleChange(false)}}>НАЗАД</div>
                <div className="addContainer">
                    <div>
                        <label htmlFor="title">ЗАГОЛОВОК</label>
                        <input type="text" name="title" defaultValue={ changeObject.title }  ref='title' id="title"/>
                    </div>
                    <div>
                        <label htmlFor="description">ТЕКСТ</label>
                        <textarea name="description" defaultValue={ changeObject.description } ref='description' id="description"/>
                    </div>
                    <div className="btn btn_add" onClick={()=>{
                        const {title, description } = this.refs;
                        if(title.value.length > 2 && description.value.length > 5){
                            if(isNew){
                                console.log(title.value, description.value);
                                addNews('EVENTS',title.value, description.value);
                                setTimeout(()=>{
                                    toggleChange(false);
                                },200);
                            } else{
                                updateNews('EVENTS',changeObject.id, title.value, description.value);
                                setTimeout(()=>{
                                    toggleChange(false);
                                },200);
                            }
                        }
                    }}>{isNew ? "ДОБАВИТЬ":"СОХРАНИТЬ"}</div>
                    {isNew ? "" :<div className="btn btn_delete" onClick={()=>{
                        const conf = confirm('Удалить?');
                        if(conf){
                            this.del(changeObject.id);
                        }
                    }}>УДАЛИТЬ</div>}
                </div>
            </div>
        )
    }
}
