<template>
    <div class="context">
        <el-row>
            <el-col :span="12">
                <el-input placeholder="请输入内容" v-model="value" clearable @></el-input>
            </el-col>
            <el-col :span="12">
                <el-button @click="add">添加单词</el-button>
                <el-button @click="begin">开始听写</el-button>
            </el-col>
            <el-table
                    :data="list"
                    size="mini"
                    style="width: 100%">
                <el-table-column min-width="180">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="text">{{scope.row}}
                        </el-button>
                    </template>
                </el-table-column>
                <el-table-column width="180">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                value: '',
                list: [],
            }
        },
        methods: {
            add() {
                this.list.push(this.value);
                this.value = ''
            },
            begin() {
                this.list.sort(this.randomSort);
                this.list.forEach((item, index) => {
                    setTimeout(() => {
                        this.paly(item)
                    }, index * 10000)
                })
            },
            randomSort(a, b) {
                return Math.random() > 0.5 ? -1 : 1;
            },
            paly(value) {
                var url = "https://fanyi.baidu.com/gettts?lan=uk&spd=3&source=web&text="+value
                var n = new Audio(url);
                n.src = url;
                n.play();
                setTimeout(() => {
                    n.play();
                },4000)
            },
            handleDelete(index) {
                this.list.splice(index, 1)
            }
        }
    }
</script>

<style scoped>
    .context {
        padding: 20px;
    }
</style>