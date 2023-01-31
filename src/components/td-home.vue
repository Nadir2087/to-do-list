<template>
  <section class="td-home">
    <div class="container">
        <header class="header">
            <div class="header-container">
                <div class="header-logo">TO_DO</div>
                <div class="add-node">
                    <button class="btn">Add Node</button>
                </div>
            </div>
        </header>
        <div class="node_board">
            <div class="node_board-container">
                <div class="node">
                    <h3 class="title">my Node</h3>
                    <ul>
                        <li>list1</li>
                        <li>list2</li>
                        <li>list3</li>
                    </ul>
                </div>
                <div class="node">
                    <h3 class="title">my Node</h3>
                    <ul>
                        <li>list1</li>
                        <li>list2</li>
                        <li>list3</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name:"td-home"

}
</script >

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
.td-home{
    font-family: 'Roboto', sans-serif;
    .container{
    background: #F9F9F9;
    max-width: 1200px;
    margin: 0 auto;

        .header{
            position: relative;
            z-index: 1;
            height: 60px;
            padding: 0 20px;
            background: #fff;
            box-shadow: 0 4px 10px #7777;
            .header-container{
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .header-logo{
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    font-size: 25px;
                }
                .add-node{
                    .btn{
                        cursor: pointer;
                        padding: 10px;
                        border: 0 ;
                        border-radius: 10px;
                        background: rgb(24, 128, 197);
                        color: #fff;
                        font-size: 18px;
                    }
                }
            }
        }
        .node_board{
            .node_board-container{
                display: flex;
                flex-wrap: wrap;
                padding: 20px;
                .node{
                    box-sizing: border-box;
                    padding: 10px;
                    width: 200px;
                    margin: 10px 16px;
                    height: 180px;
                    background: #fff;
                    box-shadow: 0 4px 10px #7777;

                    .title{
                        font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                        margin: 0;
                        padding: 0;
                        font-size: 20px;
                        text-align: center;
                    }
                    ul {
                        padding: 0;
                        li{
                        margin: 0 0 5px 0;
                        list-style: none;
                        }
                    }
                }
            }
        }
    }
}
</style>