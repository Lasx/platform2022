using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MODEL
{
    public class ModelTaskStatus
    {
        /// <summary>
        /// ����������
        /// </summary>
        public List<ModelTask> newModelTaskPending { get; set; }
        /// <summary>
        /// ���������
        /// </summary>
        public List<ModelTask> newModelTaskFinished { get; set; }
        /// <summary>
        /// ����������
        /// </summary>
        public List<ModelTask> newModelTaskProcess { get; set; }
    }
}
