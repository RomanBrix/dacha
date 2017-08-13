import React, {Component} from 'react';

export default class Photos extends Component {
    constructor(props){
        super(props);

        this.state = {
            add: false,
            selected:[]
        }
    }

    componentWillMount(){
        this.props.getImages(this.props.id);
    }

    toggleAdd(add){
        this.setState({
            add
        })
    }

    select(target){
        if (target.alt === "add_icon" || target.tagName !== 'IMG') return;
        if(!target.classList.contains('selected')){
            target.classList.add('selected');
        }else{
            target.classList.remove('selected');
        }
        let selected = document.getElementsByClassName('selected');
        this.setState({
            selected
        })

    }

    del(){
        const { onDelete, getImages, id} = this.props;
        const { selected } = this.state;
        const kind = 'PHOTO';
        let ids = [];
        for(let i = 0; i < selected.length; i++ ){
            ids.push(+selected[i].id);
        }
        onDelete(kind, ids);
        const target = document.getElementsByClassName('selected');
        let i = target.length;
        while(i){
            target[i - 1].classList.remove('selected');
            console.log(target);
            i--;
        }
        setTimeout(()=>{
            getImages(id);
            this.setState({
                selected: []
            })
        },200)

    }

    render(){
        const {album_name, toggleChange, images, id, uploadPhoto} = this.props;
        const { add, selected } = this.state;

        const img = images.map((item, index)=>{
           return(
               <img src={`../upload_src/${item.photo_name}`}
                    id={item.id}
                    key={index}
                    alt={item.photo_name}
                    className="photo"
               />

           ) 
        });
        const added = (
                    <div className="add">
                        <form action="upload.php" method="post" encType="multipart/form-data" ref='form'>
                            <input type="file" multiple="multiple" name="pictures[]" accept="image/*"/>
                            <input hidden='hidden' type="text" name="albumId[]" defaultValue={id}/>
                            <button>Загрузить</button>
                        </form>
                        <div onClick={()=>{
                            this.toggleAdd(false);
                        }}> Закрыть </div>
                    </div>
        );
        const config = (
            <div className="config">
                <span className="counter">{selected.length}</span>
                <span className="del_photo" onClick={this.del.bind(this)}>Удалить</span>
                <span className="cancel_select" onClick={()=>{
                    const target = document.getElementsByClassName('selected');
                    let i = target.length;
                    while(i){
                        target[i - 1].classList.remove('selected');
                        console.log(target);
                        i--;
                    }
                    this.setState({ selected: []});
                }}>Отмена</span>
            </div>
        )
        return(
            <div className="content">
                {selected.length > 0 ? config : ''}
                {add ? added: '' }
                <div className="back" onClick={()=>{ toggleChange(false) }}>НАЗАД</div>
                <h1>{ album_name }</h1>
                <div className="photos" onClick={({target})=>{
                    this.select(target);
                }}>
                    <div
                        className="img_add"
                        onClick={()=>{
                            this.toggleAdd(true);
                            setTimeout(()=>{
                                const add = document.getElementsByClassName('add')[0];
                                add.style.opacity = 1;
                            },100);
                        }}
                    >
                        <img src="../src/admin/content/add.svg" alt="add_icon"/>
                        <h2>Добавить фото</h2>
                    </div>
                    { img }
                </div>
            </div>
        )
    }
}
