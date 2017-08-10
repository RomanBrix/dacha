import React, {Component} from 'react';

export default class Albums extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.props.getAlbums();
    }
    del(id_album){
        const { onDelete, getAlbums } = this.props;
        let kind = "ALBUM";

        onDelete(kind, id_album);
        setTimeout(getAlbums,100);

    }

    sortRule(a,b){
        return +a.id < +b.id ? 1 : -1;
    }

    render(){
        const { getAlbums, addNewAlbum, toggleChange, albums} = this.props;
        const sortAlbums = albums.sort(this.sortRule);
        const album = sortAlbums.map((item) =>{
            return (
                <div className="profile" key={item.id} id={item.id}>
                    <p>{item.name_album}</p>
                    <div className="btns">
                        <div className="btn" onClick={()=>{
                            // getImages(item.id);
                            toggleChange(true, item.id, item.name_album);

                        }}>редактировать альбом</div>
                        <div className="btn" onClick={()=>{
                            this.del(item.id)
                        }}>удалить альбом</div>
                    </div>
                </div>
            )
        });
        return(
            <div className="content">
                <h1>Галерея</h1>
                <div className="profiles">
                    <div
                        className="profile profile_add"
                        onClick={()=>{
                            let name = prompt('Название альбома','Новый альбом');
                             console.log(name);
                             if(name !== null && name.length > 2){
                                 addNewAlbum(name);
                                 setTimeout(getAlbums,100);
                             }
                        }}
                    >
                        <img src="../src/admin/content/add.svg" alt="add_icon"/>
                        <h2>Добавить альбом</h2>
                    </div>
                    {album}
                </div>
            </div>
        )
    }
}
