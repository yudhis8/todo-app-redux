/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, View, Image, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';

import styles from './style';
import { connect } from 'react-redux';
import { Props, State } from './type';
import { Header, Modal, InputText, InputPicker, ButtonSubmit } from '../../../components';
import {pushScreen} from './../../Navigate'
import { getUserRequest } from '../../../store/auth/action';

import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import { image } from '../../../constants';
import helper from '../../../helper';
import {Navigation} from 'react-native-navigation'
class HomeScreen extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
      isVisible: false,
      todoes: [],
      category: [
        {label: 'Pilih kategori', value: ''}
      ],
      categoryValue: '',
      id: 0
    };
    console.log(props)
  }

  async componentDidMount(){
    const ayam = await this.props.getUserRequest()
    console.log('oke', ayam)
    console.log('ocobake', this.props.auth)
    console.log('ocobake', this.props.state)
  }

  create = () =>{
    var tambah = this.state.id+1
    this.setState({
      isVisible: false,
      loading: true,
      id: tambah,
      todo: '',
      cat: ''
    })
    const array = this.state.todoes
    array.push({
      title: this.state.todo,
      status: 'Pending',
      category: this.state.cat,
      id: tambah
    })

    const category = this.state.category

    const index = category.findIndex((e) => e.label === this.state.cat);

    if (index === -1) {
        // alert('aye')
        category.push({
          label: this.state.cat,
          value: this.state.cat
        })
    } else {
        urray[index] = {
          label: this.state.cat,
          value: this.state.cat
        };
    }
    
    setTimeout(()=>{
      this.setState({
        loading: false
      })

    }, 1000);
  }

  markDone = (item) =>{
    this.state.todoes.map((obj, i) => {

      if (obj.id == item) {
        if (obj.status == 'Done') {
          obj.status = 'Pending'
        } else {
          obj.status = 'Done'
        }
        
      } else {

      }

    })
    this.setState({
      todoes: this.state.todoes
    })
  }

  deleteTodo = (index) =>{
    var data = this.state.todoes
    console.log('pekok', index,)
    data.splice(index, 1)
    this.setState({
      todoes: data
    })
  }

  editTodo = (item) =>{
    this.state.todoes.map((obj, i) => {

      if (obj.id == this.state.idActive) {
        obj.title = this.state.todo
      } else {

      }

    })
    this.setState({
      todoes: this.state.todoes,
      editing: false,
      isVisible: false,
      todo: '',
      cat: ''
    })
  }

  onEdit = (item) =>{
    this.setState({
      todo: item.title,
      idActive: item.id,
      editing: true,
      isVisible: true
    })
  }

  onSort=(cat)=>{
    const filter = this.state.todoes.filter(function(data) {
      return data.category == cat;
    });
    this.setState({
      categoryValue: cat,
      todoes: filter,
    })
  }

  render() {
    console.log(this.state.todoes)
    return (
      <SafeAreaView style={styles.container}>
        <Header
          black={true}
          title={'Todo App'}
          onPressLeft={()=> Navigation.pop(this.props.componentId)}
        />
        {
          this.state.todoes.length == 0 ?
          null
          :
          <View style={styles.sortArea}>
            <Text>
              Filter by :
            </Text>
            <InputPicker
              style={{width: '70%'}}
              data={this.state.category}
              value={this.state.categoryValue}
              onValueChange={(a,b)=> this.onSort(a)}
            />
          </View>
        }
        <ScrollView>
          {
            this.state.todoes.map((data, index)=>{
              if (this.state.todoes.length === index+1) {
                if (this.state.loading) {
                  return(
                    <ActivityIndicator
                      animating={true}
                      color={'orange'}
                      size={'small'}
                    />
                  )
                } else {
                  return(
                    <View key={'asd'+index} style={styles.todoArea}>
                      <TouchableOpacity onPress={()=> this.markDone(data.id)} style={data.status == 'Pending' ? styles.left : styles.leftChange}>
                        {
                          data.status == 'Pending' ?
                          <MaterialIcons name='check-box-outline-blank' color='#000' size={30} />
                          :
                          <MaterialIcons name='check-box' color='#fff' size={30} />
                        }
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> this.onEdit(data)} style={styles.body}>
                        <Text style={styles.title}>
                          {data.title}
                        </Text>
                        <Text style={styles.title}>
                          {data.status}
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=> this.deleteTodo(index)} style={styles.right}>
                        <FontAwesome name='trash' color='#fff' size={30} />
                      </TouchableOpacity>
                    </View>
                  )
                }
              } else {
                return(
                  <View key={'asd'+index} style={styles.todoArea}>
                    <TouchableOpacity onPress={()=> this.markDone(data.id)} style={data.status == 'Pending' ? styles.left : styles.leftChange}>
                      {
                        data.status == 'Pending' ?
                        <MaterialIcons name='check-box-outline-blank' color='#000' size={30} />
                        :
                        <MaterialIcons name='check-box' color='#fff' size={30} />
                      }
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.onEdit(data)} style={styles.body}>
                      <Text style={styles.title}>
                        {data.title}
                      </Text>
                      <Text style={styles.title}>
                        {data.status}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> this.deleteTodo(index)} style={styles.right}>
                      <FontAwesome name='trash' color='#fff' size={30} />
                    </TouchableOpacity>
                  </View>
                )
              }
            })
          }
        </ScrollView>
        <TouchableOpacity onPress={()=> this.setState({isVisible: true})} style={styles.floatingButton}>
          <FontAwesome name='plus' color='#fff' size={30} />
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isVisible}
          onClose={()=> this.setState({isVisible: false})}>
          
            <InputText
              title={'Enter new todo'}
              onChangeText={(text)=> this.setState({todo: text})}
              value={this.state.todo}
            />
            {
              this.state.editing ?
              null
              :
              <InputText
                title={'Enter category'}
                onChangeText={(text)=> this.setState({cat: text})}
                value={this.state.cat}
              /> 
            }
            <ButtonSubmit
              title={'Create'}
              style={{marginVertical: 10,}}
              onPress={()=> this.state.editing ? this.editTodo() : this.create()}
            /> 
        </Modal> 
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.auth.loading,
  auth: state.auth,
  state: state,

});

const mapDispatchToProps = dispatch => ({
  getUserRequest: () => dispatch(getUserRequest()),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
